import { connect } from 'react-redux';
import Header from './component';
import { toggleActive } from '../../redux/actions/user';


const mapState = state => ({
  active: state.user.list.active,
});

const mapActions = dispatch => ({
  toggleActive: () => dispatch(toggleActive()),
});

export default connect(mapState, mapActions)(Header);
