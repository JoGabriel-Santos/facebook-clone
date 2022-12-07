import React from 'react'
import { useSelector } from 'react-redux'

import Post from './Post/Post'

function Posts() {
    const posts = useSelector((state) => state.posts)

    return (
        <div>
            {
                posts ?
                    posts.slice(0).reverse().map((post) => (
                        <div key={post._id}>
                            <Post post={post} />
                        </div>
                    ))

                    : null
            }
        </div>
    )
}

export default Posts
