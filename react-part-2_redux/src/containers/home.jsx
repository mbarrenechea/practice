'use strict';
import { connect } from 'react-redux';

import {init} from '../actions/repositories';
import Home from '../components/homeView';


const mapStateToProps = (state) => {
	return {
		repositories : state.repositories.list
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		init: () => (dispatch(init()))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);
