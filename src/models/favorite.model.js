import {Schema, Model, Types} from "mongoose";


const favoriteSchema = new Schema ({

    post:{
        Type: Types.ObjectId,
        ref: "Post"
    },

    user:{
        Type: Types.ObjectId,
        ref: "User"
    }
})

export const Favorite = mongoose.model("Favorite", favoriteSchema)