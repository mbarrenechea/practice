'use strict';
import { connect } from 'react-redux';

import Home from '../components/homeView';
import {getUsersList} from '../actions/users';


const mapStateToProps = (state) => {
	return {
		user_list : state.users.user_list
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getUsersList: () => (dispatch(getUsersList()))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
