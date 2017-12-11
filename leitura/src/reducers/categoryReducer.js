import * as types from '../actions/actionTypes';

export default function categoryReducer(state = { categories : [], postsFromCategory : [] }, action) {
    switch (action.type) {
        case types.FETCH_CATEGORIES:
            return {...state, categories : action.payload.data.categories }
        case types.FETCH_POSTS_CATEGORIES:
            return {...state, postsFromCategory : action.payload.data }
        default:
            return state;
    }
}
