import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    creator: String,
    creatorId: String,
    creatorPhoto: String,
    message: String,
    image: String,
    comments: {
        type: [String],
        default: []
    },
    likes: {
        type: [Object],
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

let PostMessage = mongoose.model('Posts', postSchema)

export default PostMessage