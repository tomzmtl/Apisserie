import { connect } from 'react-redux';
import App from './component';


const mapState = state => ({
  working: state.ui.working,
});

export default connect(mapState)(App);
