import axiosInstance from './axios'

class PostsAPI {
    static getAllPosts() {
        return axiosInstance.get('/posts')
    }
}

export default PostsAPI;