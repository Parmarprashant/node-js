var _ = require('lodash');

console.log("server is running");


function calculateCircleArea(r){
    return 3.14* (r**2);
}

console.log(calculateCircleArea(5));
console.log(calculateCircleArea(6));


function performOperation(num1,num2, performOperation){
    return performOperation(num1,num2);
}

function add(x,y){
   return x+y;

}

console.log(performOperation(10,5,add));

var arr = [12,3,4,5,6];

const evenNumber = arr.filter((data)=>{
    return data%2==0;
})

console.log(evenNumber);

const sum = _.sumBy(evenNumber);
console.log(sum);