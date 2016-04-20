'use strict';

import React from 'react';
import CoworkerActions from '../actions/coworkersActions';

class CoworkerForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    onSubmit(event){
        event.preventDefault();
        CoworkerActions.createCoworker(this.refs.name.value);
        this.setState({name: null});
        this.refs.name.value = null;
    }

    onChange(event){
        this.setState({name: event.target.value});
    }

    render() {
        return <form onSubmit={this.onSubmit.bind(this)}>
            <label>
                Add coworker
                <input type="text" name="name" ref="name" value={this.state.name} onChange={this.onChange.bind(this)}/>
            </label>
            <input type="submit" value="Save"/>
        </form>;
    }
}


export default CoworkerForm;
