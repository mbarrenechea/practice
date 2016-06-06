'use strict';

import React from 'react';
import {Link} from 'react-router';

class ShowView extends React.Component {

    componentWillMount(){
        this.props.getUserDetail(this.props.params.id);
    }

    render(){
    return <div>
        <h2>Show</h2>
        {this.props.user_show && <div>
            <h3>Name: {this.props.user_show.name}</h3>
            <h3>Job: {this.props.user_show.job}</h3>
            <Link to={`/users/edit/${this.props.user_show.id}`}>Edit</Link>
        </div>}

        </div>;
    }
};

export default ShowView;
