import React from 'react';
import PropTypes from 'prop-types';
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import { InputAdornment } from 'material-ui/Input';
import { Switch, TextField } from 'material-ui';
import { Search } from 'material-ui-icons';


const renderItems = (products, onRemove, onAdd, userProducts) =>
  products.map((item, i) => {
    const selected = userProducts.includes(item._id);
    const cb = selected ? onRemove : onAdd;
    return (
      <ListItem onClick={() => { cb(item._id); }} className="ProductList__item" key={i.toString()}>
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

const inputDecoration = (
  <InputAdornment position="end">
    <Search />
  </InputAdornment>
);

const filterCb = filter => p => p.name.toLowerCase().includes(filter.toLowerCase());

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      filter: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ filter: e.target.value });
  }

  render() {
    const {
      products,
      onRemove,
      onAdd,
      userProducts,
    } = this.props;

    console.log(222, products);

    const filteredProducts = products.filter(filterCb(this.state.filter));

    return (
      <List className="ProductList">
        <ListItem>
          <TextField
            InputProps={{ endAdornment: inputDecoration }}
            onChange={this.handleChange}
          />
        </ListItem>
        {renderItems(filteredProducts, onRemove, onAdd, userProducts)}
      </List>
    );
  }
}

ProductList.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  userProducts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductList;
