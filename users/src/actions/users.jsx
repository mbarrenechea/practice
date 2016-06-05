import {USER_LIST, USER_SHOW, USER_NEW, USER_DELETE, LOADING, API} from '../constants';
import $ from 'jquery';
import Promise from 'bluebird'

export function getUsersList() {
    return function(dispatch){
        dispatch({type: LOADING, payload: true});

        $.get(API).then(function(data){
            console.log(data);
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

export function getUserDetail(id) {
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


export function newUser(options) {
    return function(dispatch) {
        dispatch({type: LOADING, payload: true});

        $.post(API, options).then(function(data) {
            dispatch({
                type: USER_NEW,
                payload: {
                    user_show: data
                }
            });
            dispatch({type: LOADING, payload: false});
        });
    }
};

export function deleteUser(id) {
    return function(dispatch) {
        dispatch({type: LOADING, payload: true});

        $.ajax({
            url: API + id,
            type: 'DELETE',
            success: function(data) {
                dispatch({
                    type: USER_DELETE,
                    payload: {
                        user_delete: data
                    }
                });
                dispatch({
                    type: LOADING,
                    payload: false
                });
            }
        });
    }
};



