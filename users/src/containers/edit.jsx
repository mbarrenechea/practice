'use strict';
import { connect } from 'react-redux';

import EditView from '../components/editView';
import {getUserDetail, updateUser} from '../actions/users';
import {getJobsList} from '../actions/jobs';


const mapStateToProps = (state) => {
	return {
		user_show: state.users.user_show,
		jobs_list: state.jobs.jobs_list
	};
};

const mapDispatchToProps = (dispatch) => {

	return {
		getUserDetail: (id) => (dispatch(getUserDetail(id))),
		getJobsList: () => (dispatch(getJobsList())),
		updateUser: (user) => (dispatch(updateUser(user)))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EditView);
