const Product = require('../models/Product');


const get = (req, res) => {
  Product.find().lean().then((docs) => {
    res.send(docs);
  })
  .catch((e) => { res.send(e); });
};

module.exports = {
  get,
};
