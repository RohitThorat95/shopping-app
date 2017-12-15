var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/shopping');

var products =  [
  new Product({
  imagePath: 'https://cdn.shopify.com/s/files/1/1027/1179/products/1_0b1756d7-91ff-4678-b55f-1d6fb6b41a81_grande.jpg?v=1445527685',
  title: 'Denim Jacket',
  description: 'Jack n Jones Biker Denim Jacket',
  price: 10
  }),
  new Product({
  imagePath: 'https://cdn.shopify.com/s/files/1/1027/1179/products/1_0b1756d7-91ff-4678-b55f-1d6fb6b41a81_grande.jpg?v=1445527685',
  title: 'Denim Jacket',
  description: 'Jack n Jones Biker Denim Jacket',
  price: 20
  }),
  new Product({
  imagePath: 'https://cdn.shopify.com/s/files/1/1027/1179/products/1_0b1756d7-91ff-4678-b55f-1d6fb6b41a81_grande.jpg?v=1445527685',
  title: 'Denim Jacket',
  description: 'Jack n Jones Biker Denim Jacket',
  price: 30
  }),
  new Product({
  imagePath: 'https://cdn.shopify.com/s/files/1/1027/1179/products/1_0b1756d7-91ff-4678-b55f-1d6fb6b41a81_grande.jpg?v=1445527685',
  title: 'Denim Jacket',
  description: 'Jack n Jones Biker Denim Jacket',
  price: 40
  }),
  new Product({
  imagePath: 'https://cdn.shopify.com/s/files/1/1027/1179/products/1_0b1756d7-91ff-4678-b55f-1d6fb6b41a81_grande.jpg?v=1445527685',
  title: 'Denim Jacket',
  description: 'Jack n Jones Biker Denim Jacket',
  price: 50
  }),
  new Product({
  imagePath: 'https://cdn.shopify.com/s/files/1/1027/1179/products/1_0b1756d7-91ff-4678-b55f-1d6fb6b41a81_grande.jpg?v=1445527685',
  title: 'Denim Jacket',
  description: 'Jack n Jones Biker Denim Jacket',
  price: 60
  })
 ];

var done = 0;
for(var i = 0; i < products.length; i++){
  products[i].save(function(err, result) {
    done++
    if(done === products.length){
      exit();
    }
  });
}

function exit(){
  mongoose.disconnect();
}
