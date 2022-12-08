import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getPosts } from '../../actions/posts'

import CreatePost from '../CreatePost'
import Stories from '../../components/Timeline/Stories'
import Posts from '../../components/Timeline/Post/Posts'

function Timeline() {
    const [currentId, setCurrentId] = useState(0)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())

    }, [currentId, dispatch])

    return (
        <div className="col-12 col-lg-6 pb-5">
            <div className="d-flex flex-column justify-content-center mx-auto w-100" style={{ paddingTop: '56px', maxWidth: '680px' }}>

                <Stories />
                <CreatePost currentId={currentId} setCurrentId={setCurrentId} />
                <Posts />
            </div>
        </div>
    )
}

export default Timeline
