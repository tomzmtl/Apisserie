const mongoose = require('mongoose');
const schema = require('./schemas').Product;


module.exports = {
  Product: mongoose.model('Product', schema),
};
