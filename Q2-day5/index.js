const express = require('express');

const app = express();
app.use(express.json())
const db = require('./db')
const Tasks = require('./models/task');



app.post('/tasks', async (req, res)=>{
    const saved = req.body;
    const newTask = new Tasks(saved);
    const Add = await newTask.save();

    if(Add){
        res.status(202).json({
            message: "data saved succesfully",
            Tasks : Add
        })
    }
    else{
        res.status(500).json({
        message: "data is not saved"
        }
        )
    }
})


app.get('/tasks', async (req, res)=>{
    try{
        const Alltasks = await Tasks.find();
        res.status(200).json(Alltasks)
    }
    catch{
        res.status(500).json({
            message: "internal server error"
        })
    }
})


app.listen("3000", ()=>{
    console.log("port is running on 3000")
})