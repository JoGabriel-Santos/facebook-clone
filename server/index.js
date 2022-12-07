import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

import postRoutes from './routes/posts.js'
import userRouter from './routes/user.js'

const app = express()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/posts', postRoutes)
app.use('/user', userRouter)

const CONNECTION_URL = 'mongodb+srv://Gabriel:pQUBLtRCJ0iqw5Nj@facebook.hduauwl.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) }))
    .catch((error) => { console.log(error.message) })