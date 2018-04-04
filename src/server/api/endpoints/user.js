const User = require('../models/User');


const patch = (req, res) => {
  User.findById(req.params.id).then((user) => {
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
  patch,
};
