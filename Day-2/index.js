const notes = require('./notes') //import the file from the folder 
var _ = require('lodash');
var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user.username)

// const age = notes.age;
// console.log(age);

fs.appendFile('greeting.txt', 'hi' + user.username + '!\n', ()=>{
    console.log("file is created");
});

var data = ["person", "person1", 1, 2 , 1 , 2];

var filter = _.uniq(data);
console.log(filter);