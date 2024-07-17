// function declaration Activity - 1

function checkEven(num) {
    return `${num % 2 === 0 ? console.log(`${num} is Even Number`) : console.log(`${num} is Odd Number`)}`
}

function square(num) {
    return num * num;
}

// checkEven(3);
// console.log(square(3));

// function expression Activity - 2

const maximum = function (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

const concatination = function (str1, str2) {
    return str1 + " " + str2;
}

// console.log(maximum(100,10));
// console.log(concatination("Ankit","Das"));

// Arrow functions Activity - 3

const sum = (num1, num2) => num1 + num2;

const containsCharacter = (str, character) => {

    if (character.length > 1) {
        return "Character should be of 1 Alphabet not more than 1";
    }

    for (let i = 0; i < str.toLowerCase().length; i++) {
        if (str[i] === character.toLowerCase()) {
            return true;
        }
    }
    return false;
}

// console.log(sum(1,2));
// console.log(containsCharacter("Ankit","N"));

// function parameters and default values Activity - 4

function multiplication(a, b = 2) {
    return a * b;
}

function greeting(name, age = 18) {
    return `Hello ${name} your age is ${age}, Welcome! to JavaScript`;
}

// console.log(multiplication(4));
// console.log(greeting("Dileep",23));

// higher order function Activity - 5

function callFunction(fn, num) {
    let i = 1;
    while (i <= num) {
        fn(i);
        i++;
    }
}

function calledFn(num) {
    console.log("function is called " + num + " times");
}

// callFunction(calledFn, 10);

function gradeEvaluation(fn1, fn2, value) {
    let result = fn1(value);
    fn2(result);
}

function obtainGrade(mark) {
    switch (true) {
        case (mark >= 80 && mark <= 100):
            return "Grade A"
        case (mark >= 60 && mark <= 79):
            return "Grade B"

        case (mark >= 40 && mark <= 59):
            return "Grade C"

        case (mark >= 20 && mark <= 39):
            return "Grade D"

        case (mark >= 0 && mark <= 19):
            return "Grade F"

        default:
            return "Invalid Mark"
    }
}

function printGrade(grade){
    if(grade === "Invalid Mark"){
        console.log("You have not passed the correct mark, mark should be between 0 and 100");
        return;
    }
    console.log(`Your have obtained ${grade} in your exam`);
} 

gradeEvaluation(obtainGrade, printGrade, 92);
