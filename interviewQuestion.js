/**
 * Checks if a given substring is present in a string and in the correct order.
 *
 * @param {string} str - The string to search in.
 * @param {string} subString - The substring to search for.
 * @return {boolean} True if the substring is present in the correct order, false otherwise.
 */

function checkSubstring(str, subString) {

    if(subString.length === 1 && str.includes(subString[0])) {
        return true
    }

    for (let i = 0; i < subString.length - 1; i++) {
        if (str.includes(subString[i]) && str.includes(subString[i + 1])) {
            if (str.indexOf(subString[i]) < str.indexOf(subString[i + 1])) {
                continue;
            } else {
                console.log("Substring is present but not with its correct order");
                return false;
            }
        } else {
            console.log("Substring is not present");
            return false;
        }
    }
    console.log("Substring is present along with its correct order");
    return true;
}

// console.log(checkSubstring("abcdefg", "fg"));


// check if two strings are anagrams of each other

function checkAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    const arr1 = new Array(256).fill(0);
    const arr2 = new Array(256).fill(0);

    for(let i = 0; i < str1.length; i++){
        arr1[str1[i].charCodeAt(0)]++;
    }

    for(let i = 0; i < str2.length; i++){
        arr2[str2[i].charCodeAt(0)]++;
    }

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }

    return true;
}

// console.log(checkAnagram("abc", "bcad"));

// write a code for rotating an array by d elements

function rotateArrayLeft(arr, d){
    let originalArray = arr;
    let tempArr = [];
    for(let i=0; i<d; i++){
        tempArr[i] = originalArray[originalArray.length-1];
        originalArray.length = originalArray.length - 1;
    }
    tempArr = [...tempArr, ...originalArray]; 
    return tempArr;
}

console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2))

function rotateArrayRight(arr, d){
    let tempArr = [];
    for(let i = d; i<arr.length; i++){
        tempArr[tempArr.length] = arr[i];
    }
    for(let j=0; j<d; j++){
        tempArr[tempArr.length] = arr[j];
    }
    return tempArr;
}

console.log(rotateArrayRight([1, 2, 3, 4, 5], 2));