'use strict';

import React from 'react';
import CoworkerStore from '../stores/coworkersStore';
import CoworkerActions from '../actions/coworkersActions';

import List from './list';
import CoworkerForm from './coworkerForm';
import Cleaners from './cleaners';

function getCoworkerState() {
  return CoworkerStore.getState();
}


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    /**
     *  Invoked once, both on the client and server, immediately before the initial rendering occurs.
     *  if we invoke setState method, render method only execute once
    **/
    componentWillMount(){
        console.log('componentWillMount');
    }

    /**
     * Invoked once, only on the client (not on the server), immediately after the initial rendering occurs.
     * In this method, is the best place to access to DOM element from refs.
     **/
    componentDidMount(){
        console.log('componentDidMount');
        CoworkerStore.addChangeListener(this._onChange.bind(this));
        CoworkerActions.getCoworkers();
    }

    /**
     * Invoked immediately before a component is unmounted from the DOM.
     **/
    componentWillUnmount(){
        console.log('componentWillUnmount');
        CoworkerStore.removeChangeListener(this._onChange.bind(this));
    }

    /**
     * Invoked when a component is receiving new props. This method is not called for the initial render.
     * Use this as an opportunity to react to a prop transition before render() is called by updating the state using this.setState().
     * setState method will not trigger an additional render
     **/
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps');
        console.log(nextProps);
    }

    /**
     * Invoked before rendering when new props or state are being received
     **/
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate');
        return true;
    }

    /**
     * Invoked immediately before rendering when new props or state are being received.
     * IMPORTANT: You cannot use this.setState() in this method
     **/
    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate');
    }

    /**
     * Invoked immediately after the component's updates are flushed to the DOM.
     **/
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
    }

    _onChange(){
        this.setState(getCoworkerState());
    }

    render() {
        return (
            <div>
                <h1>Coworkers2 </h1>
                <CoworkerForm/>
                {this.state.coworkers && <List items={this.state.coworkers}></List>}
                <Cleaners cleaners={this.state.cleaners}></Cleaners>
            </div>
        );
    }
}

export default App;
