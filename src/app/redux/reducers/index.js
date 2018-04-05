import { reducer as routerReducer } from 'fans-router';
import products from './products';
import translations from './translations';
import ui from './ui';
import user from './user';


export default (state, action) => ({
  products: products(state.products, action),
  router: routerReducer(state.router, action, state),
  translations: translations(state.translations, action, state),
  ui: ui(state.ui, action, state),
  user: user(state.user, action, state),
});
