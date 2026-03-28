const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = 'mongodb://127.0.0.1:27017/hotels';

const mongoURL = process.env.MONGODB_URL;

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected", ()=>{
    console.log("database is connected")
})

db.on("disconnected", ()=>{
    console.log("database is disconnected");
})

db.on("error",  (err)=>{
    console.log("error occurs", err)
})

module.exports = {
    db
}
