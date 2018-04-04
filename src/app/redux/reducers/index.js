import { reducer as routerReducer } from 'fans-router';
import products from './products';
import user from './user';


export default (state, action) => ({
  products: products(state.products, action),
  router: routerReducer(state.router, action, state),
  user: user(state.user, action, state),
});
