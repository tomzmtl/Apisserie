const initialState = {
  initialized: false,
  searching: false,
  working: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'APP_INITIALIZED':
      return {
        ...state,
        initialized: true,
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

    case 'TOGGLE_SEARCH':
      return {
        ...state,
        searching: !state.searching,
      };

    default:
      return state;
  }
};
