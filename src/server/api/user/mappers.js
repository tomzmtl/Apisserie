const mapUser = user => ({
  list: user.list.map(item => ({ id: item._id })),
});

module.exports = {
  mapUser,
};
