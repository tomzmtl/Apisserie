const { User } = require('./models');
const { mapUser } = require('./mappers');


const get = (req, res) => {
  User.findById(req.params.userId).then((user) => {
    res.status(200).send(mapUser(user));
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

    user.save().then((update) => {
      res.send(mapUser(update));
    });
  });
};

module.exports = {
  get,
  patch,
};
