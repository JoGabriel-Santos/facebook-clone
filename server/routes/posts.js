import express from 'express'

import { getPosts, createPost, deletePost, commentPost, likePost } from '../controllers/posts.js'

import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/', auth, createPost)
router.delete('/:id', auth, deletePost)
router.post('/:id/commentPost', commentPost)
router.patch('/:id/likePost', auth, likePost)

export default router