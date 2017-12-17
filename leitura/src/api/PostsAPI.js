import axiosInstance from './axios'

class PostsAPI {
    static getAllPosts() {
        return axiosInstance.get('/posts')
    }
    static getPost(id) {
        return axiosInstance.get(`posts/${id}`)
    }
}

export default PostsAPI;