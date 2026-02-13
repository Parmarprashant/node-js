const express = require('express');

const app = express();

const testing = {
    name: "test1",
     age: 12,
     class: "12th"
}

 app.get('/', function(req, res){
    res.send("Hello world")
 })

 app.get('/test', (req, res)=>{
    res.send("practicing the get Req")
 }) 
 app.get('/test/testt', (req,res)=>{
    res.send("testing the more routes test2")
 })

 app.get('/obj', (req,res)=>{
    res.send(testing);
 })

app.listen(3000, ()=>{
    console.log("server is running on 3000")
});