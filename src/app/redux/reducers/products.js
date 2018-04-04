export default (state, action) => {
  switch (action.type) {
    case 'UPDATE_PRODUCTS':
      return action.products;

    default: return state;
  }
};
