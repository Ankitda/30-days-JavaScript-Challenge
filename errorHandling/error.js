// Basic Error handling with try-catch block Activity - 1

function simulateError(){
    try {
        throw new Error("Error occured due to some reason");
    } catch (error) {
        console.error("Error occured : ", error.message);
    }
}

simulateError();

function divide(a,b){
    if(b === 0) throw new Error("arithmetic Exeception : Division by zero error");
    return a/b;
}

try {
   const result = divide(10,0);
   console.log("Divide result : ", result);
} catch (error) {
    console.log("Error occured : ", error.message);
}   

// Finally Block Activity - 2

try {
    console.log("try block executed");
} catch (error) {
    console.log("catch block executed");
}finally{
    console.log("finally block executed");
}

// custom error objects Activity - 3

class CustomError extends Error{
    constructor(message){
        super(message);
        this.name = "CustomError";
    }
}

function throwError(){
    throw new CustomError("Error occured due to some reason");
    // throw new Error("Error occured due to some reason");
}

try {
    throwError();
} catch (error) {
    if(error instanceof CustomError){
        console.log(`Error occured from ${error.name} class : `, error.message);
    }else{
        console.log(`Error occured from ${error.name} class : `, error.message);
    }
}


function handleError(){
    const input = document.getElementById("name");
    try {
        if(input.value === "") throw new Error("Input value cannot be empty");  
        console.log("Input value : ", input.value);
    } catch (error) {
        console.log("Error occured : ", error.message);
    }
} 

// Error handling in Promises Activity - 4

function promise(){
    const num = Math.floor(Math.random() * 10);
    return new Promise((resolve, reject) => {
        if(num % 2 === 0){
            resolve(num);
        }else{
            reject("num is not Even");
        }
    })
}

promise().then((data) => console.log("num is even",data)).catch((error) => console.log("Error Occured : ",error));

async function validatePromise(){
    try {
        const response = await promise();
        console.log("num is even",response);
    } catch (error) {
        console.log("Error Occured : ",error);
    }
}

validatePromise();

// Graceful error handling in fetch API Activity - 5

fetch("https://system.com/products").then((response) => {
    return response.json();
}).then((data) => {
    console.log("Data recieved from API : ",data);
})
.catch((error) => {
    console.log("Error Occured : ",error.message);
})

async function retriveData(){
    try {
        const response = await fetch("https://dummy.com/products");
        const data = await response.json();
        console.log("Data recieved from API : ",data);
    } catch (error) {
        console.error("Error Occured : ",error.message);
    }
}

retriveData();
