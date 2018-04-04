import React from 'react';
import PropTypes from 'prop-types';
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Switch from 'material-ui/Switch';


const renderItems = products => products.map((item, i) => (
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

const ProductList = ({ products }) => (
  <List>
    {renderItems(products)}
  </List>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ProductList;
