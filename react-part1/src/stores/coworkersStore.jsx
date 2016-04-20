'use strict';

import AppDispatcher from '../dispatcher/appDispatcher';
import EventEmitter from 'events';
import * as Constants from '../constants';

var CHANGE_EVENT = 'change';

var _state = {
    selecteds: [{name:'Jose'}]
};

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var updateCoworkers = function(){
    let coworkers = [{name: 'RA'}]
    _state = Object.assign({}, _state, {coworkers: coworkers});
};
var createCoworker = function(name){
    //creo un nuevo array para que sea distinto el estado
    let newCoworkers = _state.coworkers.concat([{name: name}]);
    _state = Object.assign({}, _state, {coworkers: newCoworkers});
};

var reelectCleaners = function(){
    let cleaners = shuffleArray(_state.coworkers.concat([])).slice(0, 3);
    _state = Object.assign({}, _state, {cleaners: cleaners});
};

class CoworkerStore extends EventEmitter {

    getState() {
        return _state;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

var coworkerStore = new CoworkerStore();

AppDispatcher.register(function(action){
    switch (action.actionType) {
        case Constants.GET_ALL:
            updateCoworkers();
            coworkerStore.emitChange();
            break;
        case Constants.CREATE_COWORKER:
            createCoworker(action.name);
            coworkerStore.emitChange();
            break;
        case Constants.REELECT_CLEANERS:
            reelectCleaners();
            coworkerStore.emitChange();
            break;
        default:

    }
});

export default coworkerStore;
