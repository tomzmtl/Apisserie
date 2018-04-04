const mongoose = require('mongoose');


module.exports = () => {
  mongoose.connect('mongodb://heroku_47z2274v:nrvuu3ri6g249m3s2kgfb4964b@ds139801.mlab.com:39801/heroku_47z2274v');
  mongoose.Promise = global.Promise;
};
