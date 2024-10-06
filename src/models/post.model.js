import mongoose, { Schema, Types, model} from "mongoose";

const postSchema = new Schema({

    tittle:{
        Type: String,

    },

    description:{
        Type: String,
        required: true,
    },

    imageURL:{
        Type: String,
    }
})

export const Post = mongoose.model("Post", postSchema)