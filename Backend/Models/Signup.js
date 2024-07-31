import mongoose from "mongoose";


const signup = new mongoose.Schema({
 Name:{
 type: String,
 required : true
 },
  Email:{
    type : String,
    required : true,
    unique : true
  },
  Password : {
    type: String,
    required : true
  }
},{timestamps:true})

export const Signup = mongoose.model('signup',signup);