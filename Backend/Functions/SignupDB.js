import {Signup} from '../Models/Signup.js'


const SignupDB = async(name,email,password) =>{

try {
  await  Signup.create({
        Name : name,
        Email : email,
        Password : password
    })
    console.log('User Signup Successfully!');
} catch (error) {
    console.log('User Signup Unsccessfully!');
}

}


export default SignupDB;