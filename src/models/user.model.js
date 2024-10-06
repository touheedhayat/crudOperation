import mongoose, {Schema, model, Types} from "mongoose";

const userSchema  = new Schema({

    userName: {
    Type : String,
    required: true,
},
 password:{
    Type: String,
    required: true,
 },
 email:{
    Type: String,
    unique:true,
    required: true,
 }

}) 

export const User = mongoose.model("User", userSchema)