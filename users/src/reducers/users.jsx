import {USERS, USER_DETAIL} from '../constants';

const initialState = {
  list: null
};


export default function(state = initialState, action) {
    switch (action.type) {
        case USERS:
            return Object.assign({}, state, {user_list: action.payload.user_list});
        case USER_DETAIL:
            return Object.assign({}, state, {user_detail: action.payload.user_detail});
        default:
            return state;
    }
};
