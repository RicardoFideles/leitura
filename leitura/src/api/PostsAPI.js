import axiosInstance from './axios'

class PostsAPI {
    static getAllPosts() {
        return axiosInstance.get('/posts')
    }
    static getPost(id) {
        return axiosInstance.get(`posts/${id}`)
    }
    static addPost(post) {
        return axiosInstance.post('posts', post)
    }
}

export default PostsAPI;