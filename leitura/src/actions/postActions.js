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

export function addPost (post) {
    let request= postsAPI.addPost(post)

    return {
        type : types.ADD_POST,
        post : post,
        payload : request
    }
}