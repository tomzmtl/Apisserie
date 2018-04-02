import React from 'react';
import PropTypes from 'prop-types';
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';
import Switch from 'material-ui/Switch';


const renderItems = items => items.map((item, i) => (
  <ListItem key={i.toString()}>
    <ListItemText primary={item.name} />
    <ListItemSecondaryAction>
      <Switch
        onChange={() => 1}
        checked={false}
      />
    </ListItemSecondaryAction>
  </ListItem>
));

const ItemList = ({ items }) => (
  <List subheader={<ListSubheader>Settings</ListSubheader>}>
    {renderItems(items)}
  </List>
);

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ItemList;
