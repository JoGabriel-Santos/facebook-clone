import express from 'express'

import PostMessage from '../models/posts.js'

import mongoose from 'mongoose'

const router = express.Router()

export const getPosts = async (request, response) => {
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
    const { id } = require.params;

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

export default router