import { FETCH_ALL, CREATE, DELETE, COMMENT, LIKE, DELETE_COMMENT } from '../constants/actionTypes'

const reducer = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload

        case CREATE:
            return [...posts, action.payload]

        case DELETE:
            return posts.filter((post) => post._id !== action.payload)

        case DELETE_COMMENT:
        case COMMENT:
        case LIKE:
            return posts.map((post) => (post._id) === action.payload._id ? action.payload : post)

        default:
            return posts
    }
}

export default reducer