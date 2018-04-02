import React from 'react';
import { Provider } from 'react-redux';
import { Provider as RouterProvider, createRouter } from 'fans-router';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import App from '../App/container';
import reducer from '../../redux/reducers';
import routes from '../../router/routes';

import '../../../scss/app.scss';


const logger = createLogger({
  collapsed: true,
  diff: true,
  timestamp: false,
});


// eslint-disable-next-line no-underscore-dangle
const store = createStore(reducer, window.__PRELOADED_STATE__, applyMiddleware(thunk, logger));

export default (
  <Provider store={store}>
    <RouterProvider router={createRouter(routes)}>
      <App />
    </RouterProvider>
  </Provider>
);
