const express = require('express');
const MenuItem = require('../models/Menu');
const menuRouter = express.Router();


menuRouter.post('/', async (req, res)=>{
   try{
     const fData = req.body;

     const Menu = new MenuItem(fData);
     const gResponse = await Menu.save();
     console.log("data saved of menu");
     res.status(200).json(gResponse);
   }
   catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"})
    }
})

menuRouter.get('/:ingredients', async (req, res)=>{
    const ingre = req.params.ingredients;
    const response = await MenuItem.find({ingredients: ingre});

    if(!response){
        res.status(500).json("internal server error")
    }
    else{
        res.status(200).json({
            data: response
        })
    }
})



module.exports = menuRouter;