import {Schema,model, Types} from "mongoose";

const likePostSchema = new Schema({

    userId:{
        type: Types.ObjectId,
        ref: "User"

    },

    postId:{
        type: Types.ObjectId,
        ref:"Post"
    }
})

export default model("LikePost", likePostSchema)