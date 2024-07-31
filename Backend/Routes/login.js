import { Login } from "../Models/Login.js";
import { Signup } from '../Models/Signup.js';
import {set} from '../service/jwtauth.js'
import express from 'express'

const login = express.Router();


login.get('/',(req,res)=>{
res.send('<h1>This is a Login Page</h1>')
})
.post('/',async(req,res)=>{
const {email,password} = req.body;


try {
    let Userexist = await Login.findOne({
        Email : email,
        Password : password
    })
    if(!Userexist) return res.status(404).json({'error':'User Not Found'});
     const cookie =  set(Userexist);
    res.status(201).json({'status':'Success','cookie': cookie});
} catch (error) {
    console.log('Login error',error);
    res.status(500).json({ error: 'Internal Server Error' });
}


})


export default login;