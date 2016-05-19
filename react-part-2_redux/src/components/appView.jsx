'use strict';

import React from 'react';
import {Link, browserHistory} from 'react-router';

class App extends React.Component {
    render() {
        debugger;
        return <div>
            <h1>Users Application</h1>
            {this.props.loading && <span>Loading</span>}
            <header>
                Menu: {' '}
                <Link to="/">List</Link>
                {' '}
                <Link to="/list">List</Link>

            </header>
            <div className="content">
                {this.props.children}</div>
        </div>
    };
};

export default App;
