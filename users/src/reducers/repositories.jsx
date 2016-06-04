import {INIT, DETAIL} from '../constants';

const initialState = {
  list: null
};


export default function(state = initialState, action) {

    switch (action.type) {
        case INIT:
            return Object.assign({}, state, {list: action.payload.repositories});
        case DETAIL:
            return Object.assign({}, state, {detail: action.payload.detail});
        default:
            return state;
    }
};
