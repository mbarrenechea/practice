'use strict';

import React from 'react';

class EditView extends React.Component {

    componentWillMount(){
        this.props.getUserDetail(this.props.params.id = 1);
    }

    render(){
        return <div>
                <h2>Edit</h2>
            </div>;
        }
};

export default EditView;
