const mongoose = require('mongoose');


const product = mongoose.Schema({
  selected: Boolean,
});

module.exports = mongoose.Schema({
  name: String,
  products: [product],
});
