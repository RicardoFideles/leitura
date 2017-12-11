import axiosInstance from './axios'

class CategoriesAPI {
    static getAllCategories() {
        return axiosInstance.get('/categories')
    }
    static getPostsFromCategory(category) {
        return axiosInstance.get(`/${category}/posts`)
    }
}

export default CategoriesAPI;