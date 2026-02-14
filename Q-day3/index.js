



const express = require('express');
const app = express();



const obj = {
    title: "hetvi bhen",
    book: "horror life",
    Pages: 34
};

const obj2 = {
    temperature: "30deg",
    city: "Dahod",
    condition : "sunny"
}

const json = JSON.stringify(obj);
console.log(json);


app.get('/', (req,res)=>{
    res.send("server is running");
})

app.get("/obj", (req,res)=>{
    res.send(json);
})

app.get('/weather', (req,res)=>{
    res.send(obj2);
})


app.listen(3000, ()=>{
   console.log("server is running on the port 3000")
})
