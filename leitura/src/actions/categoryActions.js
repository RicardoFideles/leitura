import * as types from './actionTypes';
import categoriesAPI from '../api/CategoriesAPI';

export function loadCategories () {
    let request = categoriesAPI.getAllCategories()
    return {
        type : types.FETCH_CATEGORIES,
        payload : request
    }
}

export function loadPostsFromCategory (category) {
    let request = categoriesAPI.getPostsFromCategory(category)
    return {
        type : types.FETCH_POSTS_CATEGORIES,
        payload : request
    }

}