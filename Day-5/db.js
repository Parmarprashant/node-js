const mongoose = require('mongoose');

// define mongo db URL connection

const mongoURL = 'mongodb://127.0.0.1:27017/hotels' //mydatabase = database name


// set up Mongoose connection

mongoose.connect(mongoURL)

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("connected to MongoDB server");
})

db.on('error', (err)=>{
    console.log("MongoDB connection error", err);
})

db.on('disconnected', ()=>{
    console.log("Mongodb is disconnected");
})


//export the database connection

module.exports= {
    db
}