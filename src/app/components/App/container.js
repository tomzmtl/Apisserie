import { connect } from 'react-redux';
import App from './component';


const mapState = state => ({
  loading: state.ui.init,
  working: state.ui.working,
});

export default connect(mapState)(App);
