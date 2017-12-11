import * as types from './actionTypes';
import postsAPI from '../api/PostsAPI';

export function loadPosts (category) {
    let request= postsAPI.getAllPosts()

    return {
        type : types.FETCH_POSTS,
        payload : request
    }
}