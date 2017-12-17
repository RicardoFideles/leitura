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
    static upVotePost() {
        return axiosInstance.post('posts', { option: "upVote" })
    }
    static downVotePost() {
        return axiosInstance.post('posts', { option: "downVote" })
    }
    static updatePost(id, title, body) {
        return axiosInstance.put(`posts/${id}`, { title, body })
    }
    static deletePost(id) {
        return axiosInstance.delete(`posts/${id}`)
    }
    static getCommentsFromPost(id) {
        return axiosInstance.get(`posts/${id}/comments`)
    }
    static addComment(comment) {
        return axiosInstance.post('comments', comment)
    }
    static getComment(id) {
        return axiosInstance.get(`comments/${id}`, comment)
    }
    static upVoteComment(id) {
        return axiosInstance.post(`comments/${id}`, { option: "upVote" })
    }
    static downVoteComment(id) {
        return axiosInstance.post(`comments/${id}`, { option: "downVote" })
    }
    static deleteComment(id) {
        return axiosInstance.delete(`comments/${id}`, comment)
    }
}

export default PostsAPI;