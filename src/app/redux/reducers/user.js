const initialState = {
  list: {
    active: false,
    items: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_LIST':
      return {
        ...state,
        list: {
          ...state.list,
          ...action.list,
        },
      };

    case 'TOGGLE_ACTIVE':
      return {
        ...state,
        list: {
          ...state.list,
          active: !state.list.active,
        },
      };

    default:
      return state;
  }
};
