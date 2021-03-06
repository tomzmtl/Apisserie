import { connect } from 'react-redux';
import ProductList from './component';
import { addToList, removeFromList } from '../../redux/actions/user';


const mapState = (state) => {
  let products = state.products.map(p => ({
    ...p,
    name: p.name.fr,
  }));

  const { active } = state.user.list;

  if (active) {
    const selectedIds = state.user.list.items.map(i => i.id);
    products = products.filter(p => selectedIds.includes(p.id));
  }

  return {
    active,
    products,
    searching: state.ui.searching,
    userProducts: state.user.list.items.map(item => item.id),
    workingItem: state.ui.workingItem,
  };
};

const mapDispatch = dispatch => ({
  onAdd: productId => dispatch(addToList(productId)),
  onRemove: productId => dispatch(removeFromList(productId)),
});

export default connect(mapState, mapDispatch)(ProductList);
