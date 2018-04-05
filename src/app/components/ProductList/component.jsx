import React from 'react';
import PropTypes from 'prop-types';
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Switch from 'material-ui/Switch';


const renderItems = (products, onRemove, onAdd, userProducts) =>
  products.map((item, i) => {
    const selected = userProducts.includes(item._id);
    const cb = selected ? onRemove : onAdd;
    return (
      <ListItem key={i.toString()}>
        <ListItemText primary={item.name} />
        <ListItemSecondaryAction>
          <Switch
            onChange={() => { cb(item._id); }}
            checked={selected}
          />
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

const ProductList = ({
  products, onRemove, onAdd, userProducts,
}) => (
  <List className="ProductList">
    {renderItems(products, onRemove, onAdd, userProducts)}
  </List>
);

ProductList.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  userProducts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductList;
