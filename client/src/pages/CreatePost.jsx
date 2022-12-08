import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { createPost } from '../actions/posts'

import CreateActions from '../components/Timeline/Create/CreateActions'
import CreateRoom from '../components/Timeline/Create/CreateRoom'
import UploadImage from '../components/Timeline/Create/UploadImage'

function Create({ currentId, setCurrentId }) {
    const user = JSON.parse(localStorage.getItem('profile'))

    const [postData, setPostData] = useState({ creator: '', creatorPhoto: user.result.picture, message: '', image: '' })

    const post = useSelector((state) => currentId ? state.posts.find((message) => message._id === currentId) : null)

    const inputRef = useRef(null)

    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()

        inputRef.current.click()

        dispatch(createPost({ ...postData, creator: user?.result?.name }))
        clear()
    }

    const clear = () => {
        setCurrentId(0)
        setPostData({ creatorPhoto: user.result.picture, message: '', image: '' })
    }

    const uploadImage = (base64) => {
        setPostData({ ...postData, image: base64 })
    }

    useEffect(() => {
        if (post) setPostData(post)

    }, [post])

    return (
        <section>

            <div className="bg-white border mt-3 p-3 rounded shadow">

                <div className="d-flex" type="button">
                    <div className="p-1">
                        <img className="me-2 rounded-circle " src={user.result.picture} alt=""
                            style={{ width: '38px', height: '38px', objectFit: 'cover' }}
                        />
                    </div>

                    <input type="text" className="bg-gray border-0 form-control pointer rounded-pill"
                        placeholder={"What's on your mind, " + user.result.name + "?"}
                        data-bs-toggle="modal"
                        data-bs-target="#createModal"
                        disabled
                    />
                </div>

                <div className="fade modal" id="createModal" tabIndex={-1}
                    aria-labelledby="createModalLabel"
                    aria-hidden="true"
                    data-bs-backdrop="false">

                    <div className="modal-dialog modal-dialog-centered">
                        <form className="modal-content" onSubmit={handleSubmit}>

                            <div className="align-items-center modal-header">
                                <h5 className="m-0 text-center text-dark w-100" id="exampleModalLabel">
                                    Create post
                                </h5>

                                <button className="btn-close"
                                    ref={inputRef}
                                    aria-label="Close"
                                    data-bs-dismiss="modal"
                                    type="button"
                                />
                            </div>

                            <div className="modal-body">
                                <div className="my-1 p-1">
                                    <div className="d-flex flex-column">

                                        <div className="align-items-center d-flex">
                                            <div className="p-2">
                                                <img className="rounded-circle" src={user.result.picture} alt=""
                                                    style={{ width: '38px', height: '38px', objectFit: 'cover' }} />
                                            </div>

                                            <div>
                                                <p className="fw-bold m-0">{user.result.name}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <textarea className={'form-control border-0'} cols={30} rows={5} value={postData.message}
                                                onChange={(event) => setPostData({ ...postData, message: event.target.value })}
                                                placeholder={'Message'}
                                            />
                                        </div>

                                        <UploadImage uploadImage={uploadImage} />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary w-100">
                                    Post
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <hr />

                <CreateActions />
            </div>

            <CreateRoom />
        </section>
    )
}

export default Create
