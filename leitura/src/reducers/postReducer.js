import * as types from '../actions/actionTypes';

export default function postReducer(state = { posts : [], post : {} }, action) {
    switch (action.type) {
        case types.FETCH_POSTS:
            return {...state, posts : action.payload.data }
        case types.FETCH_POST:
            return {...state, post : action.payload.data }
        case types.ADD_POST:
            return {...state, post : action.payload.data, posts : state.posts.concat([action.post])}
        default:
            return state;
    }
}
