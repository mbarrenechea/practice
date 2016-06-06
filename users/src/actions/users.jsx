import {USER_LIST, USER_SHOW, USER_NEW, USER_DELETE, USER_UPDATE, LOADING, USERSAPI} from '../constants';
import $ from 'jquery';
import { browserHistory } from 'react-router'

export function getUsersList() {
    return function(dispatch){
        dispatch({type: LOADING, payload: true});

        $.get(USERSAPI).then(function(data){
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

        $.get(USERSAPI + id).then(function(data) {
            console.log(data);
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

/**
 * @param  {[type]}
 * @return {[type]}
 */
export function newUser(user) {
    return function(dispatch) {
        dispatch({type: LOADING, payload: true});

        $.ajax({
            url: USERSAPI,
            type: 'POST',
            data: user,
            success: function(data) {
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

                browserHistory.push('/');
            }
        });
    }
};

export function updateUser(user) {
    console.log(user);
    return function(dispatch) {
        dispatch({type: LOADING, payload: true});

        $.ajax({
            url: USERSAPI + user.id,
            type: 'PUT',
            data: user,            
            success: function(data) {
                dispatch({
                    type: USER_UPDATE,
                    payload: {
                        user_show: data
                    }
                });
                dispatch({
                    type: LOADING,
                    payload: false
                });

                browserHistory.push('/');
            }
        });
    }
};

export function updateCurrentUser(user) {
    return function(dispatch) {
        dispatch({
            type: USER_UPDATE,
            payload: {
                user_show: user
            }
        });
    }
};

export function deleteUser(id) {
    return function(dispatch) {
        dispatch({type: LOADING, payload: true});

        $.ajax({
            url: USERSAPI + id,
            type: 'DELETE',
            success: function(data) {
                dispatch({
                    type: USER_DELETE,
                    payload: {
                        user_show: data
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



