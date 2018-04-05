import { add, remove } from '../../rest/products';


export const USER_ID = '591864874b703d6c0e51915f';

export const updateList = list => ({
  type: 'UPDATE_USER_LIST',
  list,
});

export const removeFromList = productId => (dispatch) => {
  // const { user } = getState();
  dispatch({ type: 'APP_START_WORKING' });
  remove(productId, USER_ID).then(({ list }) => {
    dispatch(updateList(list));
    dispatch({ type: 'APP_STOP_WORKING' });
  });
};

export const addToList = productId => (dispatch) => {
  // const { user } = getState();
  dispatch({ type: 'APP_START_WORKING' });
  add(productId, USER_ID).then(({ list }) => {
    dispatch(updateList(list));
    dispatch({ type: 'APP_STOP_WORKING' });
  });
};
