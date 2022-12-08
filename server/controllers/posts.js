import express from 'express'

import PostMessage from '../models/posts.js'

import mongoose from 'mongoose'

const router = express.Router()

export const getPosts = async (require, response) => {
    try {
        const postMessage = await PostMessage.find()
        response.status(200).json(postMessage)

    } catch (error) {

        response.status(404).json({ message: error })
    }
}

export const createPost = async (require, response) => {
    const post = require.body

    const newPostMessage = new PostMessage({ ...post, creatorId: require.userId, createdAt: new Date().toISOString() })

    try {
        await newPostMessage.save()

        response.status(201).json(newPostMessage)

    } catch (error) {

        response.status(409).json({ message: error.message })
    }
}

export const deletePost = async (require, response) => {
    const { id } = require.params

    if (!mongoose.Types.ObjectId.isValid(id))
        return response.status(404).send(`No post with id: ${id}`)

    const deletePostId = await PostMessage.findById(id)

    if (require.userId === deletePostId.creatorId) {
        await PostMessage.findByIdAndRemove(id)

        response.json({ message: "Post deleted successfully." })

    } else {

        response.status(401).json({ message: "Unauthorized user." })
    }
}

export const commentPost = async (require, response) => {
    const { id } = require.params
    const { userName, userPhoto, userComment } = require.body

    const idComment = Math.floor(Math.random() * 100).toString()

    const commentPost = await PostMessage.findById(id)

    commentPost.comments.push({ idComment, creatorId: require.userId, userName, userPhoto, userComment })

    const updatedPost = await PostMessage.findByIdAndUpdate(id, commentPost, { new: true })

    response.json(updatedPost)
}

export const likePost = async (require, response) => {
    const { id } = require.params

    if (!mongoose.Types.ObjectId.isValid(id))
        return response.status(404).send(`No post with id: ${id}`)

    const likesPost = await PostMessage.findById(id)

    let isUserAlreadyLiked = false

    likesPost.likes.map((userId) => {
        if (userId.UserToken === require.userId) {
            isUserAlreadyLiked = true
            return
        }
    })

    if (!isUserAlreadyLiked) {
        likesPost.likes.push({ UserName: require.body.UserName, UserToken: require.userId })

    } else {
        likesPost.likes = likesPost.likes.filter((user) => require.userId !== user.UserToken)
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, likesPost, { new: true })

    response.status(200).json(updatedPost)
}

export const deleteComment = async (require, response) => {
    const { id } = require.params
    const { idComment } = require.body

    const post = await PostMessage.findById(id)

    const deleteComment = post.comments.filter((comment) => comment.idComment === idComment)

    if (require.userId === post.creatorId || require.userId === deleteComment[0].creatorId) {
        post.comments = post.comments.filter((deleteComment) => (deleteComment.idComment !== idComment))
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true })

    response.status(200).json(updatedPost)
}

export default router