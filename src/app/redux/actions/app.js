import { create } from 'fans-rest';


const rest = create();

export default null;

export const initializeApp = () => (dispatch) => {
  rest.get('/api/v1/products').then((r) => {
    dispatch({ type: 'UPDATE_PRODUCTS', products: r });
  });
};
