'use strict';

import React from 'react';

class ShowView extends React.Component {

    componentWillMount(){
        this.props.getUserDetail(this.props.params.id);
    }

    render(){
    return <div>
        <h2>Show</h2>
        {this.props.user_show && <div>
            <h3>Name: {this.props.user_show.name}</h3>
        </div>}

        </div>;
    }
};

export default ShowView;
