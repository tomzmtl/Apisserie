const initialState = {
  working: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'APP_START_WORKING':
      return {
        ...state,
        working: true,
      };

    case 'APP_STOP_WORKING':
      return {
        ...state,
        working: false,
      };

    default:
      return state;
  }
};
