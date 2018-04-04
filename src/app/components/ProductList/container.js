import { connect } from 'react-redux';
import ProductList from './component';


const mapState = state => ({
  products: state.products,
});

export default connect(mapState)(ProductList);
