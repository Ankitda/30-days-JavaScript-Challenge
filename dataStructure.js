function bubbleSort(arr) {
    let n = arr.length; 
    let swapped; 
    do {
        swapped = false; 
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;e
                swapped = true; 
            }
        }
        n--; 
    } while (swapped); 
    return arr; 
}

// console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));

function selectionSort(arr){
    let n = arr.length;

    for(let i=0; i<n-1; i++){
        let minIndex = i;

        for(let j=i+1; j<n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));

function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[Math.floor(array.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length; i++) {
        if (i === Math.floor(array.length / 2)) continue;
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

console.log(quicksort([64, 34, 25, 12, 22, 11, 90]));

// searching Algorithm Activity - 2

function isArraySorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
            continue;
        } else {
            return false
        }
    }
    return true;
}

// console.log(isArraySorted([1,5,8,10,9]));

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

function binarySearch(arr, target) {

    if (isArraySorted(arr)) {
        let start = 0;
        let end = arr.length - 1;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1;
    } else {
        return `Enter a sorted Array`;
    }
}

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));



function charOccurrences(str) {
    let charCount = {}
    for (let i = 0; i < str.length; i++) {
        if (!(str[i] in charCount)) {
            charCount[str[i]] = 1
        } else {
            charCount[str[i]] = charCount[str[i]] + 1
        }
    }
    return charCount;
}

// console.log(charOccurrences("Ankkitt"));

function findLongestSubString(str) {

    let longestSubString = '';
    let subStringLength = 0;
    let charRepeated = false;
    const strArray = str.split(" ");

    for (let i = 0; i < strArray.length; i++) {
        let tempCharArray = [];
        for (let j = 0; j < strArray[i].length; j++) {
            if (!tempCharArray.includes(strArray[i][j])) {
                tempCharArray.push(strArray[i][j])
                charRepeated = true;
            } else {
                charRepeated = false;
                break;
            }
        }
        if (subStringLength < strArray[i].length && charRepeated) {
            subStringLength = strArray[i].length;
            longestSubString = strArray[i];
        }
    }

    return {
        longestSubString,
        subStringLength
    }
}

const longestSubstring = findLongestSubString("This is a monster");

// console.log(`Longest Substring ${longestSubstring.longestSubString} is found which length is ${longestSubstring.subStringLength}`);

function mergeSortedArrays(arr1, arr2) {
    let tempArr = [];
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            tempArr.push(arr1[i]);
            i++;
        } else {
            tempArr.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        tempArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        tempArr.push(arr2[j]);
        j++;
    }

    return tempArr;
}

// console.log(mergeSortedArrays([4,6,7,8,9,10], [1,3,5,6,7,8]))

function rotateArray(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

// console.log(rotateArray([1,2,3,4,5,6], 3));