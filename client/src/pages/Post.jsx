import React from 'react'
import { useDispatch } from 'react-redux'

import { deletePost, likePost } from '../actions/posts'

import Comments from '../components/Timeline/Post/Comments/Comments'

import moment from 'moment'

function Post({ post }) {
    const user = JSON.parse(localStorage.getItem('profile'))
    const dispatch = useDispatch()

    function likesCount() {

        switch (post.likes.length) {
            case 0:
                return

            case 1:
                return post.likes[0].UserName

            case 2:
                return post.likes[0].UserName + ' and ' + post.likes[1].UserName

            default:
                return post.likes[0].UserName + ', ' + post.likes[1].UserName + ' and ' + (post.likes.length - 2) + ' others'
        }
    }

    return (
        <div className="bg-white p-4 rounded shadow mt-3">

            <div className="d-flex justify-content-between">

                <div className="d-flex">
                    <img className="rounded-circle me-2" src={post.creatorPhoto} alt=""
                        style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                    />

                    <div>
                        <p className="m-0 fw-bold">{post.creator}</p>
                        <span className="text-muted fs-7">{moment(post.createdAt).fromNow()}</span>
                    </div>
                </div>

                <i className="fas fa-ellipsis-h" id="postMenu"
                    type="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                />

                <ul className="border-0 dropdown-menu shadow" aria-labelledby="postMenu">
                    <li className="align-items-center d-flex">
                        <button className="align-items-center d-flex dropdown-item fs-7 justify-content-around"
                            onClick={() => dispatch(deletePost(post._id))}>
                            Delete post
                        </button>
                    </li>
                </ul>
            </div>

            <div className="mt-3">

                <div>
                    <p>{post.message}</p>
                    <img className="img-fluid rounded" src={post.image} alt="" />
                </div>

                <div className="mt-3 post__comment position-relative">

                    <div className="align-items-center d-flex position-absolute start-0 top-0" style={{ height: '50px', zIndex: 2 }}>
                        <div className="me-2">
                            <i className="mr text-primary fas fa-thumbs-up" />
                            <i className="mr text-danger fab fa-gratipay" />
                            <i className="mr text-warning fas fa-grin-squint" />
                        </div>

                        <p className="m-0 text-muted fs-7">{likesCount()}</p>
                    </div>

                    <div className="accordion" id="accordion">
                        <div className="accordion-item border-0">

                            {/* Comment collapse */}
                            <h2 className="accordion-header" id="heading">
                                <div className="accordion-styles accordion-button collapsed pointer d-flex justify-content-end"
                                    aria-controls={`id${post._id}`}
                                    aria-expanded="false"
                                    data-bs-target={`#id${post._id}`}
                                    data-bs-toggle="collapse">

                                    <p className="m-0">Comments</p>
                                </div>
                            </h2>

                            <hr />

                            <div className="d-flex justify-content-around">
                                <div className="align-items-center d-flex dropdown-item justify-content-center p-1 pointer rounded text-muted"
                                    onClick={() => dispatch(likePost(post._id, { 'UserName': user.result.name }))}>

                                    <i className="fas fa-thumbs-up me-3" />
                                    <p className="m-0">Like</p>
                                </div>

                                <div className="align-items-center d-flex dropdown-item justify-content-center p-1 pointer rounded text-muted"
                                    aria-controls={`id${post._id}`}
                                    aria-expanded="false"
                                    data-bs-target={`#id${post._id}`}
                                    data-bs-toggle="collapse">

                                    <i className="fas fa-comment-alt me-3" />
                                    <p className="m-0">Comment</p>
                                </div>
                            </div>

                            <Comments post={post} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
