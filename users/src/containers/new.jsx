'use strict';
import { connect } from 'react-redux';

import New from '../components/newView';
import {newUser} from '../actions/users';

const mapStateToProps = (state) => {
	return {
		user_new: state.users.user_new
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		newUser: (user) => (dispatch(newUser(user)))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(New);
