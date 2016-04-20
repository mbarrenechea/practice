'use strict';

import React from 'react';
import CoworkerActions from '../actions/coworkersActions';
import List from './list';

class Cleaners extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }



    onClick(event){
        CoworkerActions.reelectCleaners();
    }

    render() {
        return (
            <div>
                <h2>Cleaners</h2>
                <button type="button" onClick={this.onClick.bind(this)}>Random</button>
                {this.props.cleaners && <List items={this.props.cleaners}></List>}
            </div>
        )
    }
}


export default Cleaners;
