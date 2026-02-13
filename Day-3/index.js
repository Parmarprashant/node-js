const jsonString = '{"name" : "john", "age": 30, "city": "New York"}';
const conObj = JSON.parse(jsonString);
console.log(conObj)

//converted json into object


const obj = {
    name: "john",
    age: 12,
    city: "ahmedabad"
};


const jsonCon = JSON.stringify(obj)
console.log(jsonCon);
 

//converted obj into json


