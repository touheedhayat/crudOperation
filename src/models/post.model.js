import mongoose, { Schema, Types, model} from "mongoose";

const postSchema = new Schema({

    tittle:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true,
    },

    imageURL:{
        type: String,
    }
})

export default model("Post", postSchema)