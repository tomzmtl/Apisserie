const mongoose = require('mongoose');
const schema = require('../schemas/User');


module.exports = mongoose.model('User', schema);
