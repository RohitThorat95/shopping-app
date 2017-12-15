var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done){
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
  User.findById(id, function(err, user){
    done(err,user);
  });
});

// SIGN UP
passport.use('local.signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done){
  // Validation
    req.checkBody('email', 'Invalid email').notEmpty().isEmail();
    req.checkBody('password', 'Invalid password').notEmpty().isLength({min:4});
    var errors = req.validationErrors();
    if(errors){
      var messages = [];
      errors.forEach(function(error){
        messages.push(error.msg);
      });
      return done(null, false, req.flash('error', messages));
    }
    // Validation Ends
    User.findOne({'email': email}, function(err,user){
      if(err){
        return done(err);
      }
      if(user){
        return done(null, false, {message: 'Email is Already Registered!'});
      }
      var newUser = new User();
      newUser.email = email;
      newUser.password = newUser.encryptPassword(password);
      newUser.save(function(err, result){
        if(err){
          return done(err);
        }
        return done(null, newUser);
      });
    });
}));
// SIGN UP Ends

// SIGNIN
passport.use('local.signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done){
  // SIGNIN VALIDATION
  req.checkBody('email', 'Invalid email').notEmpty().isEmail();
  req.checkBody('password', 'Invalid password').notEmpty();
  var errors = req.validationErrors();
  if(errors){
    var messages = [];
    errors.forEach(function(error){
      messages.push(error.msg);
    });
    return done(null, false, req.flash('error', messages));
  }
// SIGNIN COMPARE
  User.findOne({'email': email}, function(err,user){
    if(err){
      return done(err);
    }
    if(!user){
      return done(null, false, {message: 'No User Found! '});
    }
    if(!user.validPassword(password)) {
       return done(null, false, {message: 'Wrong Password!'});
    }
    return done(null, user);
  });

}));
