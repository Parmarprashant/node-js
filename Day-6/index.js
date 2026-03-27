const express = require('express');
const app = express();
app.use(express.json());
const db = require('./db');


const MenuItem = require('./models/Menu');


const Personroutes = require('./routes/personRoutes')
const Menuroutes = require('./routes/menuRoutes')

app.use('/person', Personroutes);
app.use('/menu', Menuroutes)

const bodyParser = require('body-parser');

app.use(bodyParser.json()); //req.body

 app.get('/', function(req, res){
    res.send("Hello world")
 })

app.listen(3000, ()=>{
    console.log("server is running on 3000")
}); 