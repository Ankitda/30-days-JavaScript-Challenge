// Arithmetic Operations Activity - 1
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return Math.abs(a - b);
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function remainder(a, b) {
    return a % b;
}

// console.log(remainder(3,4));

// Assignment Operators Activity - 2

function addByTwo(val) {
    return val += 2;
}
function substractByTwo(val) {
    return val -= 2;
}

// console.log(substractByTwo(3));

// Comparison Operators Activity - 3

function isGreater(a, b) {
    if (typeof a == "number" && typeof b == "number") {

        if (a == b) {
            return `${a} is equal to ${b}`;
        } else if (a > b) {
            return `${a} is greater than ${b}`;
        } else {
            return `${b} is greater than ${a}`;
        }

    }
    return "Not a valid Parameter!";
}
function isLesser(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        if (a === b) {
            return `${a} is equal to ${b}`;
        } else if (a < b) {
            return `${a} is less than ${b}`;
        } else {
            return `${b} is less than ${a}`;
        }
    }
    return "Not a valid Parameter!";
}

function isStrictEqual(a, b) {   // It checks both the value and the data type 
   if(a === b) {
       return `${a} is equal to ${b}`;
   }else {
       return `${a} is not equal to ${b}`;
   }
}
function islosselyEqual(a, b) {    //It only checks the value of a variable
   if(a == b) {
       return `${a} is equal to ${b}`;
   }else {
       return `${a} is not equal to ${b}`;
   }
}

// console.log(isStrictEqual(1, "1"));

// Logical Operators Activity - 4

function andOperator(a, b) {
    if(a && b) {
        return true;
    }else {
        return false;
    }
}
function orOperator(a, b) {
    if(a || b) {
        return true;
    }else {
        return false;
    }
}
function notOperator(a) {
    if(!a) {
        return true;
    }else {
        return false;
    }
}

// console.log(notOperator(2===""));

// Ternary Operator Activity - 5

function checkPositive(num) {
    return num >=0  ? "Positive Number" : "Negative Number";
}

// console.log(checkPositive(-1));