import express from 'express'

import { getPosts, createPost, deletePost, commentPost, likePost, deleteComment } from '../controllers/posts.js'

import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/', getPosts)
router.post('/', auth, createPost)
router.delete('/:id', auth, deletePost)
router.post('/:id/commentPost', auth, commentPost)
router.patch('/:id/likePost', auth, likePost)

router.patch('/:id/deleteComment', auth, deleteComment)

export default router