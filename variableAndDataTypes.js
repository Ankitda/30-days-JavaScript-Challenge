// variable Declaration Activity - 1

var num = 12;
// console.log(num);

var name = "Ankit";
// console.log(name);

// constant Declaration Activity - 2

const isTrue = true;
// console.log(isTrue);

// Data Types Activity - 3

const obj = {
    person : "Ankit",
    age : 22
}

const arr = [1,2,3,4];
// console.log(typeof num);
// console.log(typeof name);
// console.log(typeof isTrue);
// console.log(typeof obj);
// console.log(typeof arr);

// Reassigning Variables Activity - 4

let value = 13;
// console.log(value);

value = "Ankit"; // it will not give error as we can reassign value to the existing variable but we can't redeclare a let variable again
// console.log(value); 

// Understanding Const Activity - 5

const result = "Ankit";

// result = 12; // it will give an error as it is more strict than let variable and it can't be redeclarable, reassignable and reinitializable , it behaves like immmutable in JS

// Feature Request Activity - 6

function varTypes() {   //Assignment - 1
    const number = 12;
    const name = "Ankit";
    const isTrue = true;
    const obj = {
        person : "Ankit",
        age : 22
    }
    const arr = [1,2,3,4];
    console.log(typeof number);
    console.log(typeof name);
    console.log(typeof isTrue);
    console.log(typeof obj);
    console.log(typeof arr);
} 

// varTypes();

// Assignment - 2 

// Example with 'let'
let variableLet = "Initial value with let";
console.log("Before reassignment (let):", variableLet); // Output: Initial value with let

// Reassigning the variable declared with 'let'

variableLet = "Reassigned value with let";
console.log("After reassignment (let):", variableLet); // Output: Reassigned value with let

// Example with 'const'
const variableConst = "Initial value with const";
console.log("Before reassignment (const):", variableConst); // Output: Initial value with const

// Trying to reassign the variable declared with 'const'
try {
    variableConst = "Reassigned value with const";
} catch (error) {
    console.log("Error when reassigning const:", error.message); // Output: Assignment to constant variable.
}

