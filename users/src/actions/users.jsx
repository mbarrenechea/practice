import {USER_LIST, USER_SHOW, USER_NEW, USER_DELETE, USER_UPDATE, LOADING, USERAPI} from '../constants';
import $ from 'jquery';
import Promise from 'bluebird'

export function getUsersList() {
    return function(dispatch){
        dispatch({type: LOADING, payload: true});

        $.get(USERAPI).then(function(data){
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

        $.get(USERAPI + id).then(function(data) {
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
            url: USERAPI,
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
            }
        });
    }
};

export function updateUser(user) {
    return function(dispatch) {
        dispatch({type: LOADING, payload: true});

        $.ajax({
            url: USERAPI + user.id,
            type: 'PUT',
            data: user,            
            success: function(data) {
                dispatch({
                    type: USER_UPDATE,
                    payload: {
                        user_update: data
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

export function deleteUser(id) {
    return function(dispatch) {
        dispatch({type: LOADING, payload: true});

        $.ajax({
            url: USERAPI + id,
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



