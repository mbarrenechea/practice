'use strict';
import { connect } from 'react-redux';

import New from '../components/newView';
import {postUserNew} from '../actions/users';

const mapStateToProps = (state) => {
	return {
		user_new: state.users.user_new
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		postUserNew: (options) => (dispatch(postUserNew(options)))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(New);
