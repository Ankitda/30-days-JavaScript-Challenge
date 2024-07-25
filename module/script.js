// Creating and Exporting modules Activity - 1

import adds from "./functions.js";
import person from "./person.js";

const result = adds(10, 10);
console.log(`The sum of 10 and 10 is ${result}`);

console.log(person.getFullName());

// Named and default Exports Activity - 2

import { substract, divide, multiply } from "./functions.js";
import add from "./functions.js";

const a = 2;
const b = 5;

console.log(`Addition of ${a} and ${b} is ${add(a,b)}`);
console.log(`Substraction of ${a} and ${b} is ${substract(a,b)}`);
console.log(`Division of ${a} and ${b} is ${divide(a,b)}`);
console.log(`Multiplication of ${a} and ${b} is ${multiply(a,b)}`);

// importing Entire Modules Activity - 3

import { productArray, features, showVerifiedUser, verifiedUser } from "./utils.js";

productArray.forEach(element => {
    console.log("names are : ", element.name);
});

features.forEach(element => {
    console.log("features are : ", element.feature);
});

console.log(showVerifiedUser(verifiedUser));

// using third party modules Activity - 4

import lodash from "lodash";
import axios from "axios";

const users = [
    { user: 'John', age: 36, active: true },
    { user: 'Jane', age: 40, active: false },
    { user: 'Jim', age: 32, active: true },
];

const activeUsers = lodash.filter(users, { active: true });

console.log('Active Users:', activeUsers);


const sortedUsers = lodash.sortBy(users, ['age']);

console.log('Sorted Users by Age:', sortedUsers);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chunkedNumbers = lodash.chunk(numbers, 3);

console.log('Chunked Numbers:', chunkedNumbers);


const duplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueValues = lodash.uniq(duplicates);

console.log('Unique Values:', uniqueValues);

async function callAPI(){
    try {
        const response = await axios.get("https://dummyjson.com/products");
        console.log(response?.data);
    } catch (error) {
        console.error("some error occured : ",error);
    }
}

callAPI();