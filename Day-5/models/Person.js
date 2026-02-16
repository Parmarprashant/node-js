const mongoose = require('mongoose');

//define the person schemaa or field validation
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number

    },
    mobile:{
        type: String,
        required: true
    },
    work:{
        type: String,
        enum: ["chef", "waiter", "manager"],
        required: true
    },
    email:{
      type: String,
      required: true,
      unique: true
    },
    address:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    }
});

// create person model

const Person = mongoose.model('Person', personSchema)
module.exports = Person;
