// Basic Regular Expressions Activity - 1

function matchWord(word) {
    const pattern = /^(?=.*J)(?=.*a)(?=.*v)(?=.*S)(?=.*c)(?=.*r)(?=.*i)(?=.*p)(?=.*t).*$/i;
    if(pattern.test(word)) {
        console.log("Words Matched");
    }else{
        console.log("Words Not Matched");
    }
}

console.log(matchWord("Javascript"));

const pattern2 = /\d/g
const word2 = "JavaScript is a very 345d language";

console.log(word2.match(pattern2));

// character classes and quantifiers Activity - 2

function checkCapital(word, type){
    if(type === "firstWord"){
        const pattern = /^[A-Z].*/;
        pattern.test(word) ? console.log("Starts with Capital") : console.log("Not Capital");
    }else if(type === "fullWord"){
        const pattern = /\b[A-Z][a-zA-Z]*\b/g;
        const words = word.match(pattern);
        console.log("words found : ", words);
    }
}

checkCapital("JavaScript Is a very good Language", "fullWord");

function matchNumberSequence(word) {
    const pattern = /\d+/g;
    const numbers = word.match(pattern);
    console.log("numbers found : ", numbers);
}

matchNumberSequence("JavaScript is a very 345d  1261 language")

// gouping and capturing Activity - 3

function extractCodes(str){
    const regex = /\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})/;
    
    const match = str.match(regex);
    if (match) {
        const areaCode = match[1];
        const centralOfficeCode = match[2];
        const lineNumber = match[3];
    
        console.log(`Area Code: ${areaCode}`);
        console.log(`Central Office Code: ${centralOfficeCode}`);
        console.log(`Line Number: ${lineNumber}`);
    } else {
        console.log("No match found.");
    }
}

extractCodes("(123) 456-7890");

function extractDomain(str){
    const emailPattern = /([^@]+)@([^@]+)/;
    
    const match = str.match(emailPattern);
    if (match) {
        const username = match[1];
        const domain = match[2];
    
        console.log(`Username: ${username}`);
        console.log(`Domain: ${domain}`);
    } else {
        console.log("No match found.");
    }
}

extractDomain("example@domain.com");

// Assertions and Boundaries Activity - 4

const startWord = /^\b\w+\b/;
const endWord = /\b\w+\b$/

console.log("dog is a beautiful animal".match(endWord));
console.log("dog is a beautiful animal".match(startWord));

// Pratical Applications Activity - 5

function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const isValid = regex.test(password);
    console.log(`Password "${password}" is ${isValid ? 'valid' : 'invalid'}.`);
}

validatePassword("Passw34#sa")

function validateURL(url) {
    const regex = /^(https?:\/\/)?((([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})|localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\[?[a-fA-F0-9:]+\]?)?(:\d{1,5})?(\/[a-zA-Z]*)*$/;
    const isValid = regex.test(url);
    console.log(`URL "${url}" is ${isValid ? 'valid' : 'invalid'}.`);
}

validateURL("http://localhost:8080/api");
