const mongoose = require('mongoose');


const listItem = mongoose.Schema({
  qty: Number,
});

module.exports = mongoose.Schema({
  gid: String,
  name: String,
  list: [listItem],
});
