const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
});


personSchema.pre('save', async function(next){

   const person = this;

   if(!person.isModified('password')) return next();

    try{
        //hashed password generate
   
        const salt = await bcrypt.genSalt(10);
         
        //hash password
        const hashedPassword = await bcrypt.hash(person.password, salt);

        person.password = hashedPassword;

      
    }
    catch(err){
        throw err;
    }
})


personSchema.methods.comparePassword = async function(candidatePassword){
    try{
     
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;

    }
    catch(err){
       throw err;

    }
}


// create person model

const Person = mongoose.model('Person', personSchema)
module.exports = Person;
