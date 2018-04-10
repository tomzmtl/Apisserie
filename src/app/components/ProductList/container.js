import { connect } from 'react-redux';
import ProductList from './component';
import { addToList, removeFromList } from '../../redux/actions/user';


const capitalize = string => `${string[0].toUpperCase().concat(string.slice(1))}`;

const mapState = (state) => {
  const { translations } = state;
  const products = state.products.map(p => ({
    ...p,
    name: capitalize(translations[p.name]),
  }));

  return {
    products,
    userProducts: state.user.list.items.map(item => item.id),
    workingItem: state.ui.workingItem,
  };
};

const mapDispatch = dispatch => ({
  onAdd: productId => dispatch(addToList(productId)),
  onRemove: productId => dispatch(removeFromList(productId)),
});

export default connect(mapState, mapDispatch)(ProductList);
