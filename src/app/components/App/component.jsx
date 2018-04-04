import React from 'react';
// import classnames from 'classnames';
// import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ProductList from '../ProductList/container';

import './styles.scss';


const App = () => (
  <div className="App">
    <AppBar>
      <Toolbar>
        <Typography variant="title" color="inherit">
          Apisserie
        </Typography>
      </Toolbar>
    </AppBar>
    <ProductList />
  </div>
);

export default App;
