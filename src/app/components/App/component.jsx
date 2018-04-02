import React from 'react';
// import classnames from 'classnames';
// import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import ItemList from '../ItemList/container';

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
    <ItemList />
  </div>
);

App.propTypes = {};

export default App;
