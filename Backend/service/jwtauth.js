import jwt from 'jsonwebtoken'
import 'dotenv/config.js'

const secertkey = process.env.secertkey;

function set(user){
    const paylod = {
        ...user
    }
   return jwt.sign(paylod,secertkey)
}

function get(tokken){
  return  jwt.verify(tokken,secertkey);
}

export {set,get};