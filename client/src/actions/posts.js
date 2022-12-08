import { FETCH_ALL, CREATE, UPDATE, DELETE, COMMENT, LIKE } from '../constants/actionTypes'

import * as api from '../api/index'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts()
        dispatch({ type: FETCH_ALL, payload: data })

    } catch (error) {

        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        dispatch({ type: CREATE, payload: data })

    } catch (error) {

        console.log(error.message)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)
        dispatch({ type: UPDATE, payload: data })

    } catch (error) {

        console.log(error.message)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)
        dispatch({ type: DELETE, payload: id })

    } catch (error) {

        console.log(error.message)
    }
}

export const commentPost = (id, userInfo) => async (dispatch) => {
    try {
        const { data } = await api.commentPost(id, userInfo)
        dispatch({ type: COMMENT, payload: data })

    } catch (error) {

        console.log(error.message)
    }
}

export const likePost = (id, userName) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id, userName)
        dispatch({ type: LIKE, payload: data })

    } catch (error) {

        console.log(error.message)
    }
}