import React from 'react'

import { useDispatch } from 'react-redux'

import { deleteComment } from '../../../../actions/posts'

import CreateComment from './CreateComment'

function Comments({ post }) {
    const dispatch = useDispatch()

    function deleteCommentHandler(id) {

        dispatch(deleteComment(post._id, { idComment: id }))
    }

    return (
        <div className="accordion-collapse collapse" id={`id${post._id}`}>

            <hr />

            <div className="accordion-body">

                {
                    post.comments.map((comment) => (

                        <div key={comment.idComment} className="align-items-center border d-flex my-1 px-3 shadow">
                            {console.log(comment)}

                            <img className="rounded-circle me-2 photo" src={comment.userPhoto} alt="" />

                            <div className="comment__input p-3 rounded w-100">
                                <div className="d-flex justify-content-end">

                                    <i className="fas fa-ellipsis-h pointer text-blue" id={`id${comment.idComment}`}
                                        aria-expanded="false"
                                        data-bs-toggle="dropdown"
                                    />

                                    <ul className="dropdown-menu border-0 shadow" aria-labelledby={`id${comment.idComment}`}>

                                        <li className="align-items-center d-flex">

                                            <button
                                                onClick={() => deleteCommentHandler(comment.idComment)}
                                                className="dropdown-item d-flex justify-content-around align-items-center fs-7">
                                                Delete comment
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                <p className="fw-bold m-0">{comment.userName}</p>
                                <p className="bg-gray fs-7 m-0 p-2 rounded">{comment.userComment}</p>
                            </div>
                        </div>
                    ))
                }

                <CreateComment post={post} />
            </div>
        </div>
    )
}

export default Comments