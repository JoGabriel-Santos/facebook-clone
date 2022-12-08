import React from 'react'

import CreateComment from './CreateComment'

function Comments({ post }) {

    console.log(post)

    return (
        <div className="accordion-collapse collapse" id="collapsePost"
            aria-labelledby="heading"
            data-bs-parent="#accordionExample">

            <hr />

            <div className="accordion-body">

                {
                    post.comments.map((comment) => (

                        <div key={comment.idComment} className="align-items-center d-flex my-1">

                            <img className="rounded-circle me-2"
                                src={comment.userPhoto} alt="avatar"
                                style={{ width: '38px', height: '38px', objectFit: 'cover' }} />

                            <div className="comment__input p-3 rounded w-100">
                                <div className="d-flex justify-content-end">

                                    <i className="fas fa-ellipsis-h pointer text-blue" id="post1CommentMenuButton"
                                        aria-expanded="false"
                                        data-bs-toggle="dropdown"
                                    />

                                    <ul className="dropdown-menu border-0 shadow" aria-labelledby="post1CommentMenuButton">

                                        <li className="align-items-center d-flex">
                                            <a className="dropdown-item d-flex justify-content-around align-items-center fs-7"
                                                href="client/src/components/Feed/Timeline/Timeline#">

                                                Delete comment
                                            </a>
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