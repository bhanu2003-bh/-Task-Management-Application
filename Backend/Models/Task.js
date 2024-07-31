import mongoose from "mongoose";


const task = new mongoose.Schema(({
    title:{
        type : String,
        required : true,
    
    },
    status:{
        type : String,
        required : true,

    },
    priorty :{
        type : String,
        required : true,
     
    },
    deadline :{
        type : String,
        required : true,

    },
    description :{
        type : String,
        required : true,
    
    },
    createdby :{
        type : mongoose.Schema.Types.ObjectId,
    }
}));

const Task = mongoose.model('task',task);

export default Task;