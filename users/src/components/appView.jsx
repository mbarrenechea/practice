'use strict';

import React from 'react';
import {Link, browserHistory} from 'react-router';

class AppView extends React.Component {
    render() {
        return <div>
            <h1>Users Application</h1>
            <header>
                Menu: {' '}
                <Link to="/">Home</Link> {' '}
                <Link to="/users/new">New User</Link>
            </header>
            <div className="content">
                {this.props.children}
            </div>

            {this.props.loading && <span>Loading</span>}
        </div>
    };
};

export default AppView;
