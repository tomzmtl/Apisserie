const initialState = {
  init: true,
  working: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'APP_INIT_STOP':
      return {
        ...state,
        init: false,
      };

    default:
      return state;
  }
};
