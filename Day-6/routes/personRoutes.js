const express = require('express');

const router = express.Router();
const Person = require('../models/Person')

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" })
    }

})



router.get('/', async (req, res)=>{
    try{
        const data = await Person.find();
        console.log("data fetched successfully");
        res.status(200).json({data})
    }
    catch(err){
      console.log(err);
        res.status(500).json({error: "internal server error"})
    }
    
})



router.get("/:workType", async (req, res)=>{
    const workType = req.params.workType;
   try{
          if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
       
            const response = await Person.find({work: workType});
            console.log("response fetched");
            res.status(200).json(response)
    }
    else{
        res.status(404).json("invalid work type")
    }
   }
   catch(err){
    res.status(500).json("internal server error")
   }
})

//update data
router.put('/:id', async (req, res)=>{
    try{
       const id = req.params.id;
       const updateData = req.body;
       const response = await Person.findByIdAndUpdate(id, updateData, {
        new: true,  // updated data ko allow krta hai
        runValidators: true // schema check
       })
 
      if(!response){
        res.status(404).json("user not found")
      }
      else{
        res.status(200).json({
            UpdatedData: response
        })
      }

    }
    catch(err){
      res.status(500).json("internal server error")
    }
})


// delete data

router.delete('/:id', async (req, res)=>{
    try{
      
        const id = req.params.id;
        const response = await Person.findByIdAndDelete(id);

        if(!response){
            res.status(404).json("user not found")
        }
    else{
        res.status(200).json("user deleted")
    }

    } catch(err){

        res.status(500).json("internal server error")

    }
})



module.exports = router;