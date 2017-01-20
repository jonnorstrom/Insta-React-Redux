import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import { fetchUser } from '../actions/UserActions';

function mapStateToProps(state) {
  return {
    user: state.userReducer
  }
}

export default connect(
  mapStateToProps,
  {
    fetchUser: () => fetchUser()
  }
)(UserInfo)
