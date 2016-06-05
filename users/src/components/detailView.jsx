'use strict';

import React from 'react';

class Detail extends React.Component {

    componentWillMount(){
        this.props.getUserDetail(this.props.params.id);
    }

    render(){
        return <div>
                <h2>Detail</h2>
                {this.props.user_detail && <div>
                    <h3>Name: {this.props.user_detail.name}</h3>
                </div>}

            </div>;
        }
};

export default Detail;
