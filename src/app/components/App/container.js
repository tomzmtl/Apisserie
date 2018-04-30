import { connect } from 'react-redux';
import App from './component';


const mapState = state => ({
  initialized: state.ui.initialized,
  working: state.ui.working,
});

export default connect(mapState)(App);
