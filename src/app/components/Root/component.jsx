import React from 'react';
import { Provider } from 'react-redux';
import { Provider as RouterProvider, createRouter } from 'fans-router';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { deepOrange, teal } from 'material-ui/colors';
import App from '../App/container';
import reducer from '../../redux/reducers';
import routes from '../../router/routes';
import { initializeApp } from '../../redux/actions/app';
import initialState from '../../redux/initialState';

import '../../../scss/app.scss';


const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: deepOrange,
  },
});

const logger = createLogger({
  collapsed: true,
  diff: true,
  timestamp: false,
});


// eslint-disable-next-line no-underscore-dangle
const store = createStore(reducer, initialState, applyMiddleware(thunk, logger));

store.dispatch(initializeApp());

export default (
  <Provider store={store}>
    <RouterProvider router={createRouter(routes)}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </RouterProvider>
  </Provider>
);
