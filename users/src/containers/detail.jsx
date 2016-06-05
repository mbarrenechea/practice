'use strict';
import { connect } from 'react-redux';

import Detail from '../components/detailView';
import {getUserDetail} from '../actions/users';

const mapStateToProps = (state) => {
	return {
		user_detail: state.users.user_detail
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
)(Detail);
