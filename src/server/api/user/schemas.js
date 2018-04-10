const mongoose = require('mongoose');


const listItem = mongoose.Schema({
  qty: Number,
});

module.exports = {
  User: mongoose.Schema({
    gid: String,
    name: String,
    list: {
      started: Boolean,
      items: [listItem],
    },
  }),
};
