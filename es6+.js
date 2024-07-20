// Template Literals Activity - 1

const name = "Ankit";   
const age = 22;
const greeting = `${name } your age is ${age}, Welcome! to JavaScript`
// console.log(greeting);

const multiStringLine = `
Hi i am Ankit Das
I am trying to be a good developer
There are many things to learn 
`
// console.log(multiStringLine);

// Destructuring Activity - 2

const arr = [1,2,3,4,5,6]
const [num1,num2] = arr;
// console.log("first number is "+num1+" and second number is "+num2);

const book = {
    title : "JavaScript",
    author : "Ankit Das"
}
const {title, author} = book;
// console.log(title + " is written by author " + author)

// Spread and Rest Operator Activity - 3

const existingArray = [1,2,3,4,5,6];
const newArray = [...existingArray,7,8,9,10]; 
// console.log(newArray);

function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Default parameters Activity - 4

function product(a, b=1){
    return a*b;
}

// console.log(product(5,6));
// console.log(product(5));

// Enhanced Object Literals Activity - 5

const fullName = "Ankit";
const Age = 22;
const obj = {
    fullName,
    Age,
    greeting(){
        return `Hello ${fullName} your age is ${Age}, Welcome! to JavaScript`
    }
}

console.log(obj.greeting());

const naming = {
    [fullName] : "Ankit Das",
    [Age] : 22,
}

console.log(naming)