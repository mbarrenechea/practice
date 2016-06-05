import {USER_LIST, USER_SHOW, LOADING, API} from '../constants';
import $ from 'jquery';
import Promise from 'bluebird'

export function getUsersList() {
    return function(dispatch){
        dispatch({type: LOADING, payload: true});

        $.get(API).then(function(data){
            dispatch({
                type: USER_LIST,
                payload:{
                    user_list: data
                }
            });
            dispatch({
                type: LOADING,
                payload: false
            });
        });
    }
};

export function getUserShow(id) {
    return function(dispatch) {
        dispatch({type: LOADING, payload: true});

        $.get(API + id).then(function(data) {
            dispatch({
                type: USER_SHOW,
                payload: {
                    user_show: data
                }
            });
            dispatch({type: LOADING, payload: false});
        });
    }
};


export function postUserNew(options) {
    return function(dispatch) {
        dispatch({type: LOADING, payload: true});

        $.get(API).then(function(data){
            dispatch({
                type: USER_NEW,
                payload: {
                    user_new: data
                }
            });
            dispatch({
                type: LOADING,
                payload: false
            });
        });


        // $.post(API, options).then(function(data) {
        //     console.log('saved')
        //     dispatch({
        //         type: USER_NEW,
        //         payload: {
        //             user_show: data
        //         }
        //     });
        //     dispatch({type: LOADING, payload: false});
        // });
    }
};



