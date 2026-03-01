const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/hotels'

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected", ()=>{
    console.log("database is connected");
})

db.on("disconnect",()=>{
    console.log("database is disconnected");
})

db.on("error", (err)=>{
    console.log("error occurs", err);
})

module.export = {
    db
}