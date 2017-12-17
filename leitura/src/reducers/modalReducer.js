import * as types from '../actions/actionTypes';

export default function modalReducer(state = { showModal : false }, action) {
    switch (action.type) {
        case types.SHOW_MODAL:
            return {...state, showModal : action.payload }
        case types.CLOSE_MODAL:
            return {...state, showModal : action.payload }
        default:
            return state;
    }
}
