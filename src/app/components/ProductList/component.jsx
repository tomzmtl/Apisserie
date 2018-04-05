import React from 'react';
import PropTypes from 'prop-types';
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import { Switch } from 'material-ui';


const capitalize = string => `${string[0].toUpperCase().concat(string.slice(1))}`;

const renderItems = (products, onRemove, onAdd, translations, userProducts) =>
  products.map((item, i) => {
    const selected = userProducts.includes(item._id);
    const cb = selected ? onRemove : onAdd;
    return (
      <ListItem onClick={() => { cb(item._id); }} className="ProductList__item" key={i.toString()}>
        <ListItemText primary={capitalize(translations[item.name])} />
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
  products, onRemove, onAdd, translations, userProducts,
}) => (
  <List className="ProductList">
    {renderItems(products, onRemove, onAdd, translations, userProducts)}
  </List>
);

ProductList.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  translations: PropTypes.objectOf(PropTypes.string).isRequired,
  userProducts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductList;
