const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Person = require('./models/Person')



passport.use(new LocalStrategy(async(USERNAME, password, done)=>{
    // authentication logic

    try{
    // console.log("Received credentails:", USERNAME, password);
    const user = await Person.findOne({username: USERNAME});
    
    if(!user){
       return done(null, false, {
        message: "incorrect username"
       });
    }

    const isMatchPassword = await user.comparePassword(password);

    
    if(isMatchPassword){
        return done(null, user);
    }else{
        return done(null, false, {
            message: "incorrect password"
        })
    }
    }
    catch(err){
        return done(err);
    }
}))

module.exports = passport;