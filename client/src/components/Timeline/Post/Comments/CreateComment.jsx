import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { commentPost } from '../../../../actions/posts'

function CreateComment({ post }) {
    const user = JSON.parse(localStorage.getItem('profile'))
    const dispatch = useDispatch()

    const [comment, setComment] = useState('')

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        dispatch(commentPost(post._id, { userName: user.result.name, userPhoto: user.result.picture, userComment: comment }))
        clear()
    }

    const clear = () => {
        setComment('')
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex my-1">
            <div>
                <img className="rounded-circle me-2" src={user.result.picture} style={{ width: '38px', height: '38px', objectFit: 'cover' }} alt="" />
            </div>

            <input className="bg-gray border-0 form-control rounded-pill"
                placeholder="Write a comment"
                name="comment"
                onChange={handleCommentChange}
                value={comment}
                type="text"
            />

            <button className="bg-gray border-0 form-control rounded-pill" style={{ fontSize: '20px', marginLeft: '5px', maxWidth: '100px' }} >
                <i className="bi bi-send"></i>
            </button>
        </form>
    )
}

export default CreateComment