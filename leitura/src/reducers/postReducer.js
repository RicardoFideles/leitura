import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_POSTS:
            console.log(action.payload.data)
            return {...state, posts : action.payload.data }
        default:
            return state;
    }
}
