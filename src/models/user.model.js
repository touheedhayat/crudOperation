import mongoose, {Schema, model, Types} from "mongoose";

const userSchema  = new Schema({

    userName: {
    type : String,
    required: true,
},
 password:{
    type: String,
    required: true,
 },

 fullName:{
    type: String,
    required: true,
 },

 email:{
    type: String,
    unique:true,
    required: true,
 }

}, {
    timestamps: true,
  }) 

export default  model("User", userSchema)