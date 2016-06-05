import {JOBS_LIST} from '../constants';

const initialState = {
  jobs_list: null
};


export default function(state = initialState, action) {
    switch (action.type) {
        case JOBS_LIST:
            return Object.assign({}, state, {jobs_list: action.payload.jobs_list});

        default:
            return state;
    }
};
