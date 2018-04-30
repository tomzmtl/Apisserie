import { create } from 'fans-rest';
import { USER_ID, updateList } from './user';


const rest = create();


export default null;

export const initializeApp = () => (dispatch) => {
  Promise.all([
    rest.get('/api/v1/products'),
    rest.get(`/api/v1/user/${USER_ID}`),
  ]).then(([products, user]) => {
    dispatch({ type: 'UPDATE_PRODUCTS', products });
    dispatch(updateList(user.list));
    dispatch({ type: 'APP_INITIALIZED' });
  });
};
