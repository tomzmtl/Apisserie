import { connect } from 'react-redux';
import ProductList from './component';
import { addToList, removeFromList } from '../../redux/actions/user';


const mapState = state => ({
  products: state.products,
  userProducts: state.user.list.map(item => item._id),
});

const mapDispatch = dispatch => ({
  onAdd: productId => dispatch(addToList(productId)),
  onRemove: productId => dispatch(removeFromList(productId)),
});

export default connect(mapState, mapDispatch)(ProductList);
