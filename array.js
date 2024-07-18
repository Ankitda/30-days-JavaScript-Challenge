// Array Creation Activity - 1

const arr = new Array();
arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);

const array = [1,2,3,4,5];

function accessArray(arr) {
    const firstElement = arr[0];
    const lastElement = arr[arr.length - 1];

    console.log("First Element: " + firstElement + "\nLast Element: " + lastElement);
}

// accessArray(arr);

// Basic Array Methods Activity - 2 

arr.push(7);

// console.log(arr);

arr.pop();

// console.log(arr);

arr.unshift(7);

// console.log(arr);

arr.shift();

// console.log(arr);

// Intermidiate Array Methods Activity - 3

const newArray = arr.map(num => num * 2);

const evenArray = arr.filter(num => num % 2 === 0);

const sumOfArray = arr.reduce((total, num) => {
    return total + num;
},0);

// console.log(newArray);
// console.log(evenArray);
// console.log(sumOfArray);

// Array iteration Activity - 4

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(num => console.log(num))

// Multi-Dimensional Arrays Activity - 5

const twoDArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

let arrOfString = "" 
function log2DArray(arr) {
    for(let i = 0; i < arr.length; i++) {
        arrOfString = "";
        for(let j = 0; j < arr[i].length; j++) {
            arrOfString += ` ${arr[i][j]}`
        }
        console.log(arrOfString);
    }
}

function accessElement(arr, rowIndex, colIndex) {
    if(rowIndex > arr.length - 1 || colIndex > arr[0].length - 1) {
        return "Please enter a correct row or col index";
    }
    const element = arr[rowIndex][colIndex];
    return element;   
}

// OR

function findElement(arr, element){
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === element){
                return arr[i][j];
            }
        }
    }
    return -1;
}

console.log(accessElement(twoDArray, 2, 2));
console.log(findElement(twoDArray, 6));