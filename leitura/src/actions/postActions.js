import * as types from './actionTypes';
import postsAPI from '../api/PostsAPI';

export function loadPosts (category) {
    let request= postsAPI.getAllPosts()

    return {
        type : types.FETCH_POSTS,
        payload : request
    }
}

export function loadPost (id) {
    let request= postsAPI.getPost(id)

    return {
        type : types.FETCH_POST,
        payload : request
    }
}