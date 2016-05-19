'use strict';
import { connect } from 'react-redux';

import Detail from '../components/detailView';
import {getDetail} from '../actions/repositories';

const mapStateToProps = (state) => {
	return {
		detail: state.repositories.detail
	};
};

const mapDispatchToProps = (dispatch) => {

	return {
		getDetail: (id) => (dispatch(getDetail(id)))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Detail);
