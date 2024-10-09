"use strict";
// let x : number = 101;  //Define the data type
// x = "harkirat"
// console.log(x);
// function greet(firstname: string){
//     console.log("hello "+ firstname);
// }
//     greet("ahaan")
function sum(a, b) {
    return a + b;
}
const value = sum(1, 2);
console.log(value);
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
const legal = isLegal(18);
