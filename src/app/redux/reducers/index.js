import { reducer as routerReducer } from 'fans-router';
import items from './items';


export default (state, action) => ({
  items: items(state.items, action),
  router: routerReducer(state.router, action, state),
});
