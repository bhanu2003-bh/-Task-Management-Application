import { Login } from "../Models/Login.js";

const LoginDB = async(email,password) =>{

    try {
      await  Login.create({
        Email : email,
        Password : password
      })
        console.log('User Login Successfully!');
    } catch (error) {
        console.log('User Login Unsccessfully!');
    }
    
}

export default LoginDB;