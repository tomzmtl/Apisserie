import { add, remove } from '../../rest/products';


export const USER_ID = '591864874b703d6c0e51915f';

export const updateList = list => ({
  type: 'UPDATE_USER_LIST',
  list,
});

export const removeFromList = productId => (dispatch) => {
  dispatch({ type: 'APP_START_WORKING', workingItem: productId });
  remove(productId, USER_ID).then(({ list }) => {
    dispatch(updateList(list));
    dispatch({ type: 'APP_STOP_WORKING', workingItem: productId });
  });
};

export const addToList = productId => (dispatch) => {
  dispatch({ type: 'APP_START_WORKING', workingItem: productId });
  add(productId, USER_ID).then(({ list }) => {
    dispatch(updateList(list));
    dispatch({ type: 'APP_STOP_WORKING', workingItem: productId });
  });
};

export const toggleActive = () => ({
  type: 'TOGGLE_ACTIVE',
});
