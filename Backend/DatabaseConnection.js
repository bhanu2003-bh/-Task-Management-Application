import mongoose from 'mongoose';

export async function ConnectDB (url){
    try {
        await  mongoose.connect(url)
        console.log('Connected to Database')
    } catch (error) {
        console.log('Not Connected to Database error:',error);
    }
}