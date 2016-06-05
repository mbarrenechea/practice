import {USER_LIST, USER_SHOW, USER_NEW} from '../constants';

const initialState = {
  user_list: null,
  user_show: null,
  user_new: null
};


export default function(state = initialState, action) {
    switch (action.type) {
        case USER_LIST:
            return Object.assign({}, state, {user_list: action.payload.user_list});
        case USER_SHOW:
            return Object.assign({}, state, {user_show: action.payload.user_show});
        case USER_NEW:
            return Object.assign({}, state, {user_new: action.payload.user_new});
        default:
            return state;
    }
};
