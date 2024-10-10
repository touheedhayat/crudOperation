import {Schema, Model, Types, model} from "mongoose";


const favoriteSchema = new Schema ({

    postId:{
        type: Types.ObjectId,
        ref: "Post"
    },

    userId:{
        type: Types.ObjectId,
        ref: "User"
    }
})

export default model("Favorite", favoriteSchema)