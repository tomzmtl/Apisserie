const User = require('../models/User');


const get = (req, res) => {
  User.findById(req.params.userId).then((user) => {
    res.status(200).send(user);
  });
};

const patch = (req, res) => {
  User.findById(req.params.userId).then((user) => {
    switch (req.body.action) {
      case 'list.remove':
        user.list.pull({ _id: req.body.id });
        break;
      case 'list.add':
        user.list.push({ _id: req.body.id });
        break;
      default: break;
    }

    user.save().then((u) => {
      res.send(u);
    });
  });
};

module.exports = {
  get,
  patch,
};
