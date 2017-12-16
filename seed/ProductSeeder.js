var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/shopping');

var products =  [
  new Product({
  imagePath: 'https://cdn.shopify.com/s/files/1/1027/1179/products/1_0b1756d7-91ff-4678-b55f-1d6fb6b41a81_grande.jpg?v=1445527685',
  title: 'Denim Jacket',
  description: 'only 2 in stock',
  price: 10
  }),
  new Product({
  imagePath: 'http://scene7.zumiez.com/is/image/zumiez/pdp_hero/LRG-Hustle-Trees-Red-Crew-Neck-Sweatshirt-_202001-0012-front.jpg',
  title: 'Hustle Crew Neck',
  description: '306 in stock',
  price: 20
  }),
  new Product({
  imagePath: 'https://cdn.shopify.com/s/files/1/0058/9552/products/793579761242_5.jpg?v=1508883866',
  title: 'Get Shi*t Done Notebook',
  description: '1006 in stock',
  price: 30
  }),
  new Product({
  imagePath: 'https://noveltystreet.com/wp-content/uploads/2015/09/Stone-Cask-Shot-Flask-Sanitary-Way-to-Share-Drink.jpg',
  title: 'Take A Shot Flask',
  description: '109 in stock',
  price: 40
  }),
  new Product({
  imagePath: 'http://cdn.shopify.com/s/files/1/0880/7334/products/Sweatshirt_2_grande.jpg?v=1477602322',
  title: 'Shopify Sweatshirt',
  description: '99 in stock',
  price: 50
  }),
  new Product({
  imagePath: 'https://cdn.shopify.com/s/files/1/0880/7334/products/OutboundCollective__34648_medium.jpg?v=1474484951',
  title: 'shopify hat',
  description: '199 in stock',
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
