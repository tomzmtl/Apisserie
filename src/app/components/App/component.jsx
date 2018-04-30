import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CircularProgress } from 'material-ui';
import { withStyles } from 'material-ui/styles';
import ProductList from '../ProductList/container';
import Header from '../Header/container';

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

const renderApp = (initialized, classes) => {
  if (!initialized) {
    return <CircularProgress className={classes.spinner} size={50} />;
  }

  return (
    <React.Fragment>
      <Header />
      <ProductList />
    </React.Fragment>
  );
};

const App = ({
  classes, initialized, working,
}) => {
  const cls = classnames({
    App: true,
    'App--working': working,
  });

  return (
    <div className={cls}>
      {renderApp(initialized, classes)}
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  initialized: PropTypes.bool.isRequired,
  working: PropTypes.bool.isRequired,
};

export default withStyles(styles)(App);
