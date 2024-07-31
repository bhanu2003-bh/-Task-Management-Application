import {get} from '../service/jwtauth.js'
function authenticate(req,res,next){
const cookie = req.body.cookie;


if(!cookie) res.status(404).json({'error':'cookie not found!'});

const User = get(cookie);
if(!User) res.status(404).json({'error':'Not Vaild Cookie!'});

req.user = User;

    next();
}

export default authenticate;