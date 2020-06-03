const mongoose = require('mongoose');


module.exports = () => {
  mongoose.connect('mongodb://heroku_87c15819:j1g6f6qspch165ntp2pkn2686v@ds227146.mlab.com:27146/heroku_87c15819');
  mongoose.Promise = global.Promise;
};
