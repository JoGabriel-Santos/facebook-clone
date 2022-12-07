import express from 'express'

import PostMessage from '../models/posts.js'

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

export default router