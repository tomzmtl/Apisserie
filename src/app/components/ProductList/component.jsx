import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import { InputAdornment } from 'material-ui/Input';
import { Checkbox, TextField } from 'material-ui';
import { CheckCircle, Search } from 'material-ui-icons';
import { withStyles } from 'material-ui/styles';

import './styles.scss';


const styles = {
  check: {
    display: 'block',
    height: '120px',
    margin: 'auto',
    width: '120px',
    marginTop: '100px',
  },
  filter: {
    width: '100%',
  },
  list: {
    paddingTop: 0,
  },
  search: {
    marginBottom: '10px',
    position: 'sticky',
    top: '56px',
    background: '#EEE',
    zIndex: 200,
  },
};

const handleClick = (cb, id) => () => cb(id);

const renderItems = (products, onRemove, onAdd, userProducts, workingItem) => {
  products.sort((a, b) => (a.name > b.name ? 1 : -1));
  return products.map((item) => {
    const selected = userProducts.includes(item.id);
    const cb = selected ? onRemove : onAdd;
    const cls = classnames({
      ProductList__item: true,
      'ProductList__item--selected': selected,
      'ProductList__item--working': workingItem === item.id,
    });

    return (
      <ListItem onClick={handleClick(cb, item.id)} className={cls} key={item.id}>
        <React.Fragment>
          <ListItemText primary={item.name} />
          <ListItemSecondaryAction className="ProductList__checkbox">
            <Checkbox onChange={() => { cb(item.id); }} checked={selected} />
          </ListItemSecondaryAction>
        </React.Fragment>
      </ListItem>
    );
  });
};

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

  renderFilter() {
    if (this.props.active) {
      return null;
    }

    return (
      <ListItem className={this.props.classes.search}>
        <TextField
          className={this.props.classes.filter}
          InputProps={{ endAdornment: inputDecoration }}
          onChange={this.handleChange}
        />
      </ListItem>
    );
  }

  render() {
    const {
      active,
      classes,
      products,
      onRemove,
      onAdd,
      userProducts,
      workingItem,
    } = this.props;

    const filteredProducts = products.filter(filterCb(this.state.filter));

    return (
      <List className={classes.list}>
        {this.renderFilter()}
        {renderItems(filteredProducts, onRemove, onAdd, userProducts, workingItem)}
        {active && !products.length ? <CheckCircle className={classes.check} nativeColor="#EEEEEE" /> : null}
      </List>
    );
  }
}

ProductList.propTypes = {
  active: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  userProducts: PropTypes.arrayOf(PropTypes.string).isRequired,
  workingItem: PropTypes.string,
};

ProductList.defaultProps = {
  workingItem: null,
};

export default withStyles(styles)(ProductList);
