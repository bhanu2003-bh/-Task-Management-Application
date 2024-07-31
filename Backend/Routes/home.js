import express from 'express';
import Task from '../Models/Task.js';
const home = express.Router();

// GET route
home.get('/',  (req, res) => {
    res.send({'hello World':'hello'});
});

// POST route
home.post('/', async (req, res) => {
    const { title, status, priority, deadline, description } = req.body.obj || {};

     const id = req.user._doc._id;
  

    if (!title || !status) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        await Task.create({
            title: title,
            status: status,
            priorty: priority,
            deadline: deadline,
            description: description,
            createdby: id
        });
        res.status(201).json({ 'Status': 'Task is Successfully Uploaded' });
    } catch (error) {
        console.error("Home POST error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
})
.post('/get',async(req,res)=>{
    const id = req.user._doc._id;
    try {
        const tasks = await Task.find({ createdby: id });
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Home GET error:", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
;

export default home;
