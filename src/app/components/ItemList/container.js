import { connect } from 'react-redux';
import ItemList from './component';


const mapState = state => ({
  items: state.items,
});

export default connect(mapState)(ItemList);
