import {JOBSAPI, JOBS_LIST, LOADING} from '../constants';
import $ from 'jquery';

export function getJobsList() {
    return function(dispatch){
        dispatch({type: LOADING, payload: true});

        $.get(JOBSAPI).then(function(data){
            dispatch({
                type: JOBS_LIST,
                payload:{
                    jobs_list: data
                }
            });
            dispatch({
                type: LOADING,
                payload: false
            });
        });
    }
};