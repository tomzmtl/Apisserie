import { create } from 'fans-rest';
import { USER_ID, updateList } from './user';


const rest = create();

export default null;

export const initializeApp = () => (dispatch) => {
  dispatch({ type: 'APP_START_WORKING' });
  Promise.all([
    rest.get('/api/v1/products'),
    rest.get(`/api/v1/user/${USER_ID}`),
  ]).then(([products, user]) => {
    dispatch({ type: 'UPDATE_PRODUCTS', products });
    dispatch(updateList(user.list));
    dispatch({ type: 'APP_STOP_WORKING' });
  });
};
