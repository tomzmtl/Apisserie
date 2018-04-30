import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton, Toolbar, Typography } from 'material-ui';
import { PauseCircleFilled, PlayCircleFilled } from 'material-ui-icons';
import { withStyles } from 'material-ui/styles';


const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const renderButton = (active, toggleActive) => {
  if (active) {
    return <PauseCircleFilled nativeColor="#FFFFFF" onClick={() => toggleActive()} />;
  }

  return <PlayCircleFilled nativeColor="#FFFFFF" onClick={() => toggleActive()} />;
};

const Header = ({ active, classes, toggleActive }) => (
  <AppBar>
    <Toolbar className={classes.toolbar}>
      <Typography variant="title" color="inherit">Apisserie</Typography>
      <IconButton>
        {renderButton(active, toggleActive)}
      </IconButton>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  active: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  toggleActive: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
