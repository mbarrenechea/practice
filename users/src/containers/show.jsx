'use strict';
import { connect } from 'react-redux';

import Show from '../components/showView';
import {getUserShow} from '../actions/users';

const mapStateToProps = (state) => {
	return {
		user_show: state.users.user_show
	};
};

const mapDispatchToProps = (dispatch) => {

	return {
		getUserShow: (id) => (dispatch(getUserShow(id)))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Show);
