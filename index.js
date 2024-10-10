import express, { Router } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
// import userRouter from "././src/routes/user.router.js";
import userRouter from '././src/routes/user.router.js';
import userPost from '././src/routes/post.router.js';
import favPost from '././src/routes/favorite.router.js'
import like from '././src/routes/like.route.js'
dotenv.config()

const app = express()
app.use(express.urlencoded({ extended: true, limit: '100kb' }));
app.use(express.json())
app.use("/user",userRouter)
app.use("/post",userPost)
app.use("/favPost",favPost)
app.use("/like",like)

app.listen(process.env.PORT || 8000, async()=>{
     
    try {
        await  mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log("Server running on port ",process.env.PORT)
  }
     catch (error) {
        console.log("There's an error ",error)
        // throw error
    }
})



