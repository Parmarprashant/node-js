const express = require('express');
const app = express();
app.use(express.json());
const db = require('./db');
require('dotenv').config();
const PORT = process.env.PORT || 3000;


const MenuItem = require('./models/Menu');
const passport = require('./auth')

const Personroutes = require('./routes/personRoutes')
const Menuroutes = require('./routes/menuRoutes')



const bodyParser = require('body-parser');

app.use(bodyParser.json()); //req.body

const logRequest  = (req, res, next)=>{
    console.log(`[${new Date().toLocaleString()}] Request Made to ${req.originalUrl}`);
    next();
}

app.use(logRequest);
 
app.use(passport.initialize());
const AUTHCHECK = passport.authenticate('local', {session: false});
 app.get('/', function(req, res){
    res.send("Welcome to our hotel")
 })


 app.use('/person', AUTHCHECK,Personroutes);
app.use('/menu', Menuroutes)
 

app.listen(PORT, ()=>{
    console.log("server is running on 3000")
}); 