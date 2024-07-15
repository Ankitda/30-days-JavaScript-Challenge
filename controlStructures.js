// If-Else statements Activity - 1

function checkNum(num){
    if(num > 0){
        return `${num} is a positive number`
    }else if(num < 0){
        return `${num} is a negative number`
    }else{
        return `${num} is a Zero number`
    }
}

function checkEligible(age){
    if(age >= 18){
        return `Person with age ${age} is Eligible to Vote`
    }else {
        return `Person with age ${age} is not Eligible to Vote`
    }
}

// console.log(checkEligible(18));

// Nested If-Else statements Activity - 2

function largestOfThree(a,b,c){

    if(a === b && b === c){
        return `Not a Valid Parameter`
    }

    if(a > b){
        if(a > c){
            return `${a} is the largest number`
        }else{  
            return `${c} is the largest number`
        }
    }else{
        if(b > c){
            return `${b} is the largest number`
        }else{
            return `${c} is the largest number`
        }
    }

}

// console.log(largestOfThree(3,3,1));

// switch case Activity - 3

function fetchDay(day){

    if(day < 1 || day > 7){
        return "Not a Valid Day"
    }

    switch(day){
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
    }
}

function grade(marks){
    switch(true){
        case (marks >= 80 && marks <= 100):
            return "A"
        case (marks >= 60 && marks <= 79):
            return "B"
        case (marks >= 50 && marks <= 59):
            return "C"
        case (marks >= 40 && marks <= 49):
            return "D"
        case (marks >= 0 && marks <= 39):
            return "F"
        default:
            return "Not a Valid Grade"
    }
}

// console.log(grade(100));

// conditional Ternary Operator Activity - 4

function checkEven(num){
    return num % 2 === 0 ? "Even Number" : "Odd Number"
}

// console.log(checkEven(6));

// combining Conditions Activity - 5

function checkLeapYear(year){

    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return `${year} is a Leap Year` 
            }else{
                return `${year} is not a Leap Year`
            }
        }else{
            return `${year} is a Leap Year`
        }
    }else{
        return `${year} is not a Leap Year`
    }
}

console.log(checkLeapYear(1996));