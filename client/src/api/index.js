import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((request) => {
    if (localStorage.getItem('profile')) {
        request.headers.Authorization = JSON.parse(localStorage.getItem('profile'))['token'].credential ?
            `Bearer ${JSON.parse(localStorage.getItem('profile'))['token'].credential}` :
            `Bearer ${JSON.parse(localStorage.getItem('profile'))['token']}`
    }

    return request
})

export const fetchPosts = () => API.get(`/posts`)
export const createPost = (newPost) => API.post('/posts', newPost)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)

export const commentPost = (id, userInfo) => API.post(`/posts/${id}/commentPost`, userInfo)
export const likePost = (id, userName) => API.patch(`/posts/${id}/likepost`, userName)

export const deleteComment = (id, idComment) => API.patch(`/posts/${id}/deleteComment`, idComment)

export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)