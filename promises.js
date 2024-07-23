// basic promise understanding Activity - 1 

const resolvePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve("Success")
    },2000)
})

resolvePromise.then((value) => {
    console.log(value);
})

const rejectPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        return reject("Error")
    },2000)
})

rejectPromise.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log("error fetched : ",error); 
})

// chaining promises Activity - 2 

function fetchServerData(data, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(data)
        },timeout)
    })
}

fetchServerData("data fetched from server 1", 2000)
.then((value) => {
    console.log(value);
    return fetchServerData("data fetched from server 2", 2000)
}).then((value) => {
    console.log(value);
    return fetchServerData("data fetched from server 3", 2000)
}).then((value) => {
    console.log(value);
    return fetchServerData("data fetched from server 4", 2000)
}).then((value) => {
    console.log(value);
}).catch((error) => {
    console.log(error);
})

// using Async/Await Activity - 3

async function fetchServerDataAsync() {
    try{

        const data = await fetchServerData("data fetched from server 1", 2000);
        console.log(data);

        // catch the error got from rejectPromise

        await rejectPromise;

    }catch(error) {
        console.log("error fetched in fetchServerDataAsync",error);
    }
}

fetchServerDataAsync();

// Fetching Data from API Activity - 4

// by using promises 

fetch("https://dummyjson.com/products").then((response) => {
    return response.json();
}).then((data) => {
    console.log("Data recieved from API : ",data);
})

// by using async/await 

async function retriveData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data retrieved from API : ",data);
} 

retriveData("https://dummyjson.com/products");

// concurrent promisesm Activity - 5

const promise1 = fetchServerData("data fetched from server 1", 2000);
const promise2 = fetchServerData("data fetched from server 2", 4000);
const promise3 = fetchServerData("data fetched from server 3", 1000);
const promise4 = fetchServerData("data fetched from server 4", 8000);

Promise.all([promise1,promise2,promise3,promise4]).then((results) => {
    console.log(results);
}).catch((error) => {
    console.log(error);
})

Promise.race([promise1,promise2,promise3,promise4]).then((results) => {
    console.log(results);
}).catch((error) => {
    console.log(error);
})