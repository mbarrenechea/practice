import {USER_LIST, USER_SHOW, USER_NEW, USER_UPDATE, USER_DELETE} from '../constants';

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
            return Object.assign({}, state, {user_show: action.payload.user_show});

        case USER_UPDATE: 
            return Object.assign({}, state, {user_update: action.payload.user_update});

        case USER_DELETE:
            let user_list = state.user_list;
            let user_deleted = action.payload.user_delete;
            let new_user_list = user_list && user_list.filter(function(user) {
              return (user.id != user_deleted.id)
            });            

            return Object.assign({}, state, {user_list: new_user_list});

        default:
            return state;
    }
};
