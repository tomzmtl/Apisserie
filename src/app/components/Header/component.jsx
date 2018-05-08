import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, IconButton, Toolbar, Typography } from 'material-ui';
import { PauseCircleFilled, PlayCircleFilled, Search } from 'material-ui-icons';
import { withStyles } from 'material-ui/styles';


const styles = {
  search: {
    marginLeft: 'auto',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const renderSearchButton = (active, classes, toggleSearch) => {
  if (active) {
    return null;
  }

  return (
    <IconButton className={classes.search} onClick={toggleSearch}>
      <Search nativeColor="#FFFFFF" />
    </IconButton>
  );
};

const renderShopButton = (active, toggleActive) => {
  if (active) {
    return <PauseCircleFilled nativeColor="#FFFFFF" onClick={toggleActive} />;
  }

  return <PlayCircleFilled nativeColor="#FFFFFF" onClick={toggleActive} />;
};

const Header = ({
  active,
  classes,
  toggleActive,
  toggleSearch,
}) => (
  <AppBar>
    <Toolbar className={classes.toolbar}>
      <Typography variant="title" color="inherit">Apisserie</Typography>
      {renderSearchButton(active, classes, toggleSearch)}
      <IconButton>
        {renderShopButton(active, toggleActive)}
      </IconButton>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  active: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  toggleActive: PropTypes.func.isRequired,
  toggleSearch: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
