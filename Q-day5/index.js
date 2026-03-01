const express = require('express');
const db = require('./db')
const app = express();
app.use(express.json());
const menu = require('./models/menu')


app.post('/menu', async (req, res)=>{
    const fdata = req. body;
    const addDish = new menu(fdata);
    const response  = await addDish.save()
    console.log("data is saved");
    if(response){
        res.status(201).json(response);
    }
    else{
        res.status(500).json({
            message: "data is not saved due to internal server error"
        })
    }
})

app.get('/allitems', async (req, res)=>{
    const data = await menu.find();
    res.status(200).json(data);
})



app.listen("3000", ()=>{
    console.log("server is running on the port 3000");
})  