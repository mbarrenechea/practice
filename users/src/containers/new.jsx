'use strict';
import { connect } from 'react-redux';

import New from '../components/newView';
import {newUser} from '../actions/users';
import {getJobsList} from '../actions/jobs';

const mapStateToProps = (state) => {
	return {
		user_new: state.users.user_new,
		jobs_list: state.jobs.jobs_list		
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getJobsList: () => (dispatch(getJobsList())),		
		newUser: (user) => (dispatch(newUser(user)))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(New);
