import React from 'react'
import { useDispatch } from 'react-redux'

import { deletePost, likePost } from '../../../../actions/posts'

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

            {/* Author */}
            <div className="d-flex justify-content-between">

                {/* Avatar */}
                <div className="d-flex">
                    <img className="rounded-circle me-2" src={post.creatorPhoto} alt=""
                        style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                    />

                    <div>
                        <p className="m-0 fw-bold">{post.creator}</p>
                        <span className="text-muted fs-7">{moment(post.createdAt).fromNow()}</span>
                    </div>
                </div>

                {/* Delete */}
                <i className="fas fa-ellipsis-h" id="postMenu"
                    type="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                />

                {/* Delete menu */}
                <ul className="border-0 dropdown-menu shadow" aria-labelledby="postMenu">
                    <li className="align-items-center d-flex">
                        <button className="align-items-center d-flex dropdown-item fs-7 justify-content-around"
                            onClick={() => dispatch(deletePost(post._id))}>
                            Delete post
                        </button>
                    </li>
                </ul>
            </div>

            {/* Post content */}
            <div className="mt-3">

                {/* Content */}
                <div>
                    <p>{post.message}</p>
                    <img className="img-fluid rounded" src={post.image} alt="" />
                </div>

                {/* Likes & comments */}
                <div className="mt-3 post__comment position-relative">

                    {/* Likes */}
                    <div className="align-items-center d-flex position-absolute start-0 top-0" style={{ height: '50px', zIndex: 2 }}>
                        <div className="me-2">
                            <i className="mr text-primary fas fa-thumbs-up" />
                            <i className="mr text-danger fab fa-gratipay" />
                            <i className="mr text-warning fas fa-grin-squint" />
                        </div>

                        <p className="m-0 text-muted fs-7">{likesCount()}</p>
                    </div>

                    {/* Comments start*/}
                    <div className="accordion" id="accordion">
                        <div className="accordion-item border-0">

                            {/* Comment collapse */}
                            <h2 className="accordion-header" id="heading">
                                <div className="accordion-button collapsed pointer d-flex justify-content-end"
                                    aria-controls="collapsePost"
                                    aria-expanded="false"
                                    data-bs-target="#collapsePost"
                                    data-bs-toggle="collapse">

                                    <p className="m-0">Comments</p>
                                </div>
                            </h2>

                            <hr />

                            {/* Comment & like bar */}
                            <div className="d-flex justify-content-around">
                                <div className="align-items-center d-flex dropdown-item justify-content-center p-1 pointer rounded text-muted"
                                    onClick={() => dispatch(likePost(post._id, { 'UserName': user.result.name }))}>

                                    <i className="fas fa-thumbs-up me-3" />
                                    <p className="m-0">Like</p>
                                </div>

                                <div className="align-items-center d-flex dropdown-item justify-content-center p-1 pointer rounded text-muted"
                                    aria-controls="collapsePost"
                                    aria-expanded="false"
                                    data-bs-target="#collapsePost"
                                    data-bs-toggle="collapse">

                                    <i className="fas fa-comment-alt me-3" />
                                    <p className="m-0">Comment</p>
                                </div>
                            </div>

                            {/* Comment expand */}
                            <div className="accordion-collapse collapse" id="collapsePost"
                                aria-labelledby="heading"
                                data-bs-parent="#accordionExample">

                                <hr />

                                <div className="accordion-body">

                                    {/* Comments */}
                                    <div className="align-items-center d-flex my-1">

                                        {/* Avatar */}
                                        <img className="rounded-circle me-2"
                                            src="https://source.unsplash.com/collection/happy-people" alt="avatar"
                                            style={{ width: '38px', height: '38px', objectFit: 'cover' }} />

                                        {/* Comment text */}
                                        <div className="comment__input p-3 rounded w-100">

                                            {/* Comment menu of author */}
                                            <div className="d-flex justify-content-end">

                                                {/* Icon */}
                                                <i className="fas fa-ellipsis-h pointer text-blue" id="post1CommentMenuButton"
                                                    aria-expanded="false"
                                                    data-bs-toggle="dropdown" />

                                                {/* Menu */}
                                                <ul className="dropdown-menu border-0 shadow"
                                                    aria-labelledby="post1CommentMenuButton">

                                                    <li className="align-items-center d-flex">
                                                        <a className="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                                            href="client/src/components/Feed/Timeline/Timeline#">
                                                            Delete comment
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>

                                            <p className="fw-bold m-0">John</p>
                                            <p className="bg-gray fs-7 m-0 p-2 rounded">Very good!</p>
                                        </div>
                                    </div>

                                    {/* Create comment */}
                                    <form className="d-flex my-1">

                                        {/* Avatar */}
                                        <div>
                                            <img className="rounded-circle me-2" src={user.result.picture} alt=""
                                                style={{ width: '38px', height: '38px', objectFit: 'cover' }} />
                                        </div>

                                        {/* Input */}
                                        <input className="bg-gray border-0 form-control rounded-pill" placeholder="Write a comment" type="text" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post
