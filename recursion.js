// Basic Recursion Activity - 1

function factorial(num){
    if(num === 0 || num === 1){
        return 1;
    }
    return num * factorial(num - 1);
}

console.log(factorial(5));
console.log(factorial(10));

function fibonacci(n) {
    if (n == 0) {
        return 0
    }
    if (n == 1) {
        return 1
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(10));

// Recursion with Arrays Activity - 2

function sumOfArray(arr){
    if(arr.length === 0){
        return 0
    }
    return arr[0] + sumOfArray(arr.slice(1));
}

console.log(sumOfArray([1,2,3,4,5]));

function findMax(arr){
    if(arr.length === 0){
        return -1;
    }
    if(arr.length === 1){
        return arr[0]
    }
    return Math.max(arr[0], findMax(arr.slice(1)));
}

console.log(findMax([1,2,3,4,5,6,7,8,9,10]));

// string Manipulation with recursion Activity - 3

function reverseString(str){
    if(str.length === 0){
        return "";
    }
    return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello"));

function isPalindrome(str) {
    if (str.length === 0 || str.length === 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("racecar"));

// recursive search Activity - 4

function countOccurrences(arr, target) {
    if (arr.length === 0) {
        return 0;
    }
    let isMatch = arr[0] === target ? 1 : 0;

    return isMatch + countOccurrences(arr.slice(1), target);
}

console.log(countOccurrences([1, 2, 5, 4, 5, 6,5], 5))

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        console.log("Target not found in the array");
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        console.log(`Target found at index ${mid}`);
        return mid;
    }

    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, right);
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 3;
console.log(binarySearch(sortedArray, target));
