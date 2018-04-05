import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AppBar, CircularProgress, Toolbar, Typography, IconButton } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import Add from 'material-ui-icons/Add';
import ProductList from '../ProductList/container';

import './styles.scss';


const styles = {
  spinner: {
    display: 'block',
    margin: '100px auto 0',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const App = ({ classes, loading, working }) => {
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
      {loading ? <CircularProgress className={classes.spinner} size={50} /> : null}
      <ProductList />
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
  working: PropTypes.bool.isRequired,
};

export default withStyles(styles)(App);
