import {USERS, USER_DETAIL, LOADING, API} from '../constants';
import $ from 'jquery';
import Promise from 'bluebird'

export function getUsersList() {
    return function(dispatch){
        dispatch({
            type: LOADING,
            payload: true
        });

        $.get(API).then(function(data){
            dispatch({
                type: USERS,
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
                type: USER_DETAIL,
                payload: {
                    user_detail: data
                }
            });
            dispatch({type: LOADING, payload: false});
        });
    }
};
