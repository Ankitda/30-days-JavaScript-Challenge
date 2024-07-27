// understanding closures Activity - 1

function outer() {
    let x = 10;
    function inner() {
        console.log(x);
    }
    return inner;
}

function counter() {
    let count = 0;
    function increament() {
        return count += 1;
    }
    return increament;
}

const fun = outer();
fun();

const count = counter();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());

// practical closures Activity - 2

function generateIDS() {
    const store = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let idGenerated = "";
    const trackArray = [];
    for (let i = 0; i < 10; i++) {
        idGenerated += store[Math.floor(Math.random() * store.length)];
    }
    function trackID() {
        trackArray.push(idGenerated);
        return trackArray.length;
    }
    return trackID;
}

const noOfIds = generateIDS();
console.log("Track no of IDs ");
console.log(noOfIds());
console.log(noOfIds());
console.log(noOfIds());

function user(userName) {
    const name = userName;
    return function () {
        console.log(`Hello ${name} welcome to JavaScript`);
    }
}

const greet = user("Ankit");
greet();

// closures in loop Activity - 3

function createFunctions(size) {
    const functions = [];
    for (let i = 0; i < size; i++) {
        functions.push((function (index) {
            return function () {
                console.log(index);
            };
        })(i));
    }
    return functions;
}

const functionCreated = createFunctions(5);

functionCreated[0]();
functionCreated[1]();
functionCreated[2]();


// module pattern Activity - 4

function listModule() {
    let list = [];

    return {
        addItem(item) {
            list.push(item);
            console.log("Item is added");
        },
        removeItem(item) {
            let index = list.indexOf(item);
            if (index > -1) {
                list.splice(index, 1);
                console.log("Item is removed");
            } else {
                console.log("Item not found");
            }
        },
        getList() {
            if (list.length > 0) {
                list.forEach((item, index) => console.log(`${index} : ${item}`));
            } else {
                console.log("List is empty");
            }
        }
    }
}

const list = listModule();

list.addItem("Mango");
list.addItem("Apple");
list.addItem("Banana");

list.getList();

list.removeItem("Apple");

list.getList();

// Memoization Activity - 5

function memoize(fn) {
    
    const cache = new Map();

    return function (...args) {

        const key = JSON.stringify(args); 

        if (cache.has(key)) {
    
            console.log("Using cached result");
            return cache.get(key); 

        }

        const result = fn(...args); 
        cache.set(key, result); 
        return result;
    };
}

function multiply(num) {
    return num * num; 
}

const memoizedSlowFunction = memoize(multiply);

// console.log(memoizedSlowFunction(5)); 
// console.log(memoizedSlowFunction(5));

function factorial(num){
    
    if(num === 0 || num === 1){
        return 1;
    }
    
    return num * factorial(num - 1);

}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(4));
console.log(memoizedFactorial(4));


