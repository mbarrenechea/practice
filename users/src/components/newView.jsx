'use strict';

import React from 'react';

class NewView extends React.Component {

    componentWillMount(){
        this.props.postUserNew();
    }

    render(){
        console.log('new');
        return <div>
                <h2>New</h2>
            </div>;
        }
};

export default NewView;
