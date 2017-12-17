import * as types from './actionTypes';

export function openModal () {
    return {
        type : types.SHOW_MODAL,
        payload : true
    }
}

export function closeModal () {
    return {
        type : types.CLOSE_MODAL,
        payload : false
    }
}