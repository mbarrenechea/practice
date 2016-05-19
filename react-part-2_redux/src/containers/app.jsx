'use strict';
import { connect } from 'react-redux';

import App from '../components/appView';


const mapStateToProps = (state) => {
	return {
		loading: state.loading,
		routing: state.routing
	};
};

const mapDispatchToProps = (dispatch) => {
	return {

	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
