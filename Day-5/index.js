const express = require('express');
const app = express();
app.use(express.json());
const db = require('./db');
const Person = require('./models/Person');
const MenuItem = require('./models/Menu');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body


 app.get('/', function(req, res){
    res.send("Hello world")
 })

//post meth overview 

app.post('/person', async (req,res)=>{
    try{
    const data = req.body;  //Assuming the request body contains the person data

    //create anew Person document using the Mongoose model

    const newPerson = new Person(data);
    // newPerson.name = data.name;
    // newPerson.age = data.age;
    // newPerson.work = data.work;
    // newPerson.email = data.email;   //this makes the code hard or complex so we data in "new person"
    // newPerson.mobile = data.person;
    // newPerson.address = data.address;


    // newPerson.save((error, person)=>{
    //  if(error){
    //     console.log("Error saving person", error);
    //     res.status(500).json({error: 'internal server error'});
       
    //  }   ///  ye ab allowed nhi hai code tough and crash krwa skta hai
    //  else{
    //     console.log("data is saved successfully");
    //     res.status(200).json(person); 
    //  }
    // })



const  response = await newPerson.save();
console.log("data saved");
res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: "internal server error"})
    }

})




app.get('/person', async (req, res)=>{
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

app.post('/menu', async (req, res)=>{
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

app.listen(3000, ()=>{
    console.log("server is running on 3000")
}); 