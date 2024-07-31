import express from 'express'
import SignupDB from '../Functions/SignupDB.js';
import LoginDB from '../Functions/LoginDB.js';
import { Signup } from '../Models/Signup.js';
import { Login } from '../Models/Login.js';
import { set } from '../service/jwtauth.js';
const signup = express.Router();



signup.get('/',(req,res)=>{
  res.send('<h1>This is Signup Page</h1>');
})
.post('/',async(req,res)=>{
const {name,email,password} = req.body;
try {
  const existingUser = await Signup.findOne({ Email: email });

  if (existingUser) {
    console.log(existingUser);
    return res.status(409).json({ error: 'Already Registered User' });
  }

  await SignupDB(name, email, password);
  await LoginDB(email, password);
  const User = await Login.findOne({
    Email : email,
    Password : password
  })
   
  const cookie = set(User);

  res.status(200).json({ status: 'Success','cookie': cookie});
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal Server Error' });
}
})

export default signup;