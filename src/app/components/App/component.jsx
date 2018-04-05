import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import Add from 'material-ui-icons/Add';
import ProductList from '../ProductList/container';

import './styles.scss';


const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const App = ({ classes, working }) => {
  const cls = classnames({
    App: true,
    'App--working': working,
  });

  return (
    <div className={cls}>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="title" color="inherit">
            Apisserie
          </Typography>
          <IconButton>
            <Add nativeColor="#FFFFFF" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <ProductList />
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  working: PropTypes.bool.isRequired,
};

export default withStyles(styles)(App);
