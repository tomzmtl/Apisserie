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

    case 'APP_START_WORKING':
      return {
        ...state,
        working: true,
        workingItem: action.workingItem || null,
      };

    case 'APP_STOP_WORKING':
      return {
        ...state,
        working: false,
        workingItem: null,
      };

    default:
      return state;
  }
};
