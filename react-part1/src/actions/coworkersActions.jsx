'use strict';

import AppDispatcher from '../dispatcher/appDispatcher';
import * as Constants from '../constants';

class CoworkersActions {

    static getCoworkers(){
        AppDispatcher.dispatch({
            actionType: Constants.GET_ALL
        });
    }

    static createCoworker(name){
        AppDispatcher.dispatch({
            actionType: Constants.CREATE_COWORKER,
            name: name
        });
    }


    static reelectCleaners(){
        AppDispatcher.dispatch({
            actionType: Constants.REELECT_CLEANERS
        });
    }
}

export default CoworkersActions;
