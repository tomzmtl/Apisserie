const mongoose = require('mongoose');
const schema = require('./schemas').User;


module.exports = {
  User: mongoose.model('User', schema),
};
