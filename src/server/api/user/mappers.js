const mapUser = user => ({
  list: {
    items: user.list.items.map(item => ({ id: item._id })),
    started: user.list.started,
  },
});

module.exports = {
  mapUser,
};
