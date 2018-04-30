const mapUser = user => ({
  list: {
    items: user.list.items.map(item => ({ id: item._id })),
    // active: user.list.active,
  },
});

module.exports = {
  mapUser,
};
