const mongoose = require('mongoose');
const schema = require('../schemas/Product');


module.exports = mongoose.model('Product', schema);
