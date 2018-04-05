const initialState = {
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_LIST':
      return {
        ...state,
        list: action.list,
      };

    default:
      return state;
  }
};
