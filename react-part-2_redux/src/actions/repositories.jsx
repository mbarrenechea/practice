import {INIT, LOADING, DETAIL} from '../constants';
import $ from 'jquery';

export function init() {
    return function(dispatch){
        dispatch({
            type: LOADING,
            payload: true
        });
        $.get('https://api.github.com/repositories').then(function(data){
            dispatch({
                type: INIT,
                payload:{
                    repositories: data
                }
            });
            dispatch({
                type: LOADING,
                payload: false
            });
        });
    }

};

export function getDetail(id) {
    return function(dispatch) {
        dispatch({type: LOADING, payload: true});
        $.get('https://api.github.com/repositories/' + id).then(function(data) {
            dispatch({
                type: DETAIL,
                payload: {
                    detail: data
                }
            });
            dispatch({type: LOADING, payload: false});
        });
    }
};
