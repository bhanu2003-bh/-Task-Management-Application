import mongoose from "mongoose";


const login = new mongoose.Schema({
  Email:{
    type : String,
    required : true,
    unique:true
  },
  Password : {
    type: String,
    required : true
  }
},{timestamps:true})

export const Login = mongoose.model('login',login);