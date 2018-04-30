const mongoose = require('mongoose');


const listItem = mongoose.Schema({
  qty: Number,
});

module.exports = {
  User: mongoose.Schema({
    gid: String,
    name: String,
    list: {
      active: Boolean,
      items: [listItem],
    },
  }),
};
