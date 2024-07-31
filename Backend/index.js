//imports
import express from 'express'
import 'dotenv/config.js'
import { ConnectDB } from './DatabaseConnection.js';
import cors from 'cors';
import login from './Routes/login.js';
import home from './Routes/home.js';
import signup from './Routes/signup.js';
import authenticate from './middlewares/authenticate.js';

//constants
const app = express();
const port = process.env.PORT;
const mongodburl = process.env.mongodburl;


//mongoose connection
ConnectDB(mongodburl);





//middlewares
app.use(cors());
app.use(express.json());

//routes handling
app.use('/login',login)
app.use('/signup',signup);
app.use('/home',authenticate,home)



app.listen(port,()=>{
    console.log('Listing at PORT:',port);
})