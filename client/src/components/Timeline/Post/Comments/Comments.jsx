import React from 'react'

import Create from './Create'

function Comments() {
    return (
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

                <Create />
            </div>
        </div>
    )
}

export default Comments