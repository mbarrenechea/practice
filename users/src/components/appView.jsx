'use strict';

import React from 'react';
import {Link, browserHistory} from 'react-router';

class App extends React.Component {
    render() {
        return <div>
            <h1>Users Application</h1>
            <header>
                Menu: {' '}
                <Link to="/">List</Link>
                {' '}
                <Link to="/list">List</Link>
            </header>
            {this.props.loading && <span>Loading</span>}
            <div className="content">
                {this.props.children}
            </div>
        </div>
    };
};

export default App;
