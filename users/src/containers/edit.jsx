'use strict';
import { connect } from 'react-redux';

import EditView from '../components/editView';
import {getUserDetail} from '../actions/users';

const mapStateToProps = (state) => {
	return {
		user_show: state.users.user_show
	};
};

const mapDispatchToProps = (dispatch) => {

	return {
		getUserDetail: (id) => (dispatch(getUserDetail(id)))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditView);
