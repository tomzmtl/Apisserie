const { Product } = require('./models');
const { mapProducts } = require('./mappers');


const get = (req, res) => {
  Product.find().lean().then((products) => {
    res.send(products.map(mapProducts));
  })
    .catch((e) => { res.send(e); });
};

module.exports = {
  get,
};
