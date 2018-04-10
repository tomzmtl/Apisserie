module.exports = {
  env: {
    node: true,
  },
  rules: {
    'no-underscore-dangle': ['error', {
      allow: ['_id'],
    }],
  },
};
