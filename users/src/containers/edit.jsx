'use strict';
import { connect } from 'react-redux';

import EditView from '../components/editView';
import {getUserDetail, updateUser} from '../actions/users';

const mapStateToProps = (state) => {
	return {
		user_show: state.users.user_show
	};
};

const mapDispatchToProps = (dispatch) => {

	return {
		getUserDetail: (id) => (dispatch(getUserDetail(id))),
		updateUser: (user) => (dispatch(updateUser(user)))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditView);
