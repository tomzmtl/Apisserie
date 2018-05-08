import { connect } from 'react-redux';
import Header from './component';
import { toggleActive } from '../../redux/actions/user';
import { toggleSearch } from '../../redux/actions/ui';


const mapState = state => ({
  active: state.user.list.active,
});

const mapActions = dispatch => ({
  toggleActive: () => dispatch(toggleActive()),
  toggleSearch: () => dispatch(toggleSearch()),
});

export default connect(mapState, mapActions)(Header);
