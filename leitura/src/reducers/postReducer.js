import * as types from '../actions/actionTypes';

export default function postReducer(state = { posts : [] }, action) {
    switch (action.type) {
        case types.FETCH_POSTS:
            return {...state, posts : action.payload.data }
        default:
            return state;
    }
}
