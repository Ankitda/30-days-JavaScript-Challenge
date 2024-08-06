// understanding LocalStorage Activity - 1 
function saveToLocalStorage() {
    const inputValue = document.getElementById('inputValue').value;
    localStorage.setItem('myString', inputValue);
    alert('Value saved to local storage!');
}

function retrieveFromLocalStorage() {
    const storedValue = localStorage.getItem('myString');
    const outputElement = document.getElementById('outputValue');
    if (storedValue) {
        outputElement.textContent = `Stored value: ${storedValue}`;
    } else {
        outputElement.textContent = 'No value found in local storage.';
    }
}

function saveObjectToLocalStorage() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    const person = {
        name: name,
        age: age
    };

    localStorage.setItem('person', JSON.stringify(person));
    alert('Object saved to local storage!');
}

function retrieveObjectFromLocalStorage() {
    const storedPerson = localStorage.getItem('person');
    const outputElement = document.getElementById('outputObject');

    if (storedPerson) {
        const personObject = JSON.parse(storedPerson);
        outputElement.textContent = `Name: ${personObject.name}, Age: ${personObject.age}`;
    } else {
        outputElement.textContent = 'No object found in local storage.';
    }
}

// using localStorage Activity - 2

function saveFormData(event) {
    event.preventDefault(); 
    const name = document.getElementById('username').value;
    const email = document.getElementById('useremail').value;

    const user = {
        name: name,
        email: email
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Data saved to local storage!');
    displayStoredData();
}

function removeItem() {
    const removeText = document.getElementById('removeText');
    localStorage.removeItem('user');
    alert('Data removed from local storage!');
    removeText.textContent = "After removing data";
    displayStoredData();
}

function displayStoredData() {
    const storedUser = localStorage.getItem('user');
    const outputElement = document.getElementById('outputData');

    if (storedUser) {
        const userObject = JSON.parse(storedUser);
        outputElement.textContent = `Name: ${userObject.name}, Email: ${userObject.email}`;
    } else {
        outputElement.textContent = 'No data found in local storage.';
    }
}

// Call displayStoredData on page load
window.onload = displayStoredData;

// understanding sessionStorage Activity - 3

function saveToSessionStorage() {
    const inputValue = document.getElementById('sessionInput').value;
    sessionStorage.setItem('myString', inputValue);
    alert('Value saved to session storage!');
}

function retrieveFromSessionStorage() {
    const storedValue = sessionStorage.getItem('myString');
    const showData = document.getElementById('showData');
    if (storedValue) {
        showData.textContent = `Stored value: ${storedValue}`;
    } else {
        showData.textContent = 'No value found in session storage.';
    }
}

function saveObjectToSessionStorage(){
    const name = document.getElementById('sessionName').value;
    const age = document.getElementById('sessionAge').value;

    const person = {
        name,
        age
    }

    sessionStorage.setItem('sessionPerson', JSON.stringify(person));
    alert('Object saved to session storage!');
}

function retrieveObjectFromSessionStorage() {
    const storedPerson = sessionStorage.getItem('sessionPerson');
    const outputElement = document.getElementById('showObject');

    if (storedPerson) {
        const personObject = JSON.parse(storedPerson);
        outputElement.textContent = `Name: ${personObject.name}, Age: ${personObject.age}`;
    } else {
        outputElement.textContent = 'No object found in local storage.';
    }
}

// using sessionStorage Activity - 4

function saveSessionData(event){
    event.preventDefault();
    const name = document.getElementById('sessionFormName').value;
    const email = document.getElementById('sessionFormEmail').value;

    const user = {
        name,
        email
    }

    sessionStorage.setItem('sessionUser', JSON.stringify(user));
    alert('Data saved to session storage!');
    displayStoredSessionData();
}

function removeSessionItem(){
    const removeText = document.getElementById('sessionTitle');
    sessionStorage.removeItem('sessionUser');
    alert('Data removed from session storage!');
    removeText.textContent = "After removing data";
    displayStoredSessionData();
}
function displayStoredSessionData() {
    const storedUser = sessionStorage.getItem('sessionUser');
    const outputElement = document.getElementById('outputSessionData');                      

    if (storedUser) {
        const userObject = JSON.parse(storedUser);
        outputElement.textContent = `Name: ${userObject.name}, Email: ${userObject.email}`;
    } else {
        outputElement.textContent = 'No data found in session storage.';
    }
}

// comparing local and session storage Activity - 5

function saveToStorage() {
    const key = document.getElementById('inputstorageKey').value;
    const value = document.getElementById('inputstorageValue').value;

    if (key && value) {
        localStorage.setItem(key, value);
        sessionStorage.setItem(key, value);
        alert('Value saved to both local and session storage!');
    } else {
        alert('Please enter both key and value.');
    }
}

function retrieveFromStorage() {
    const key = document.getElementById('inputstorageKey').value;

    if (key) {
        const localStorageValue = localStorage.getItem(key);
        const sessionStorageValue = sessionStorage.getItem(key);

        if (localStorageValue !== null) {
            console.log(`Local Storage - Key: ${key}, Value: ${localStorageValue}`);
        } else {
            console.log(`Local Storage - Key: ${key}, Value not found.`);
        }

        if (sessionStorageValue !== null) {
            console.log(`Session Storage - Key: ${key}, Value: ${sessionStorageValue}`);
        } else {
            console.log(`Session Storage - Key: ${key}, Value not found.`);
        }
    } else {
        alert('Please enter a key to retrieve the value.');
    }
}

function clearAllStorage() {
    // Clear all data from local storage
    localStorage.clear();
    // Clear all data from session storage
    sessionStorage.clear();

    alert('All data cleared from both local and session storage!');
    verifyStorageIsEmpty();
}

function verifyStorageIsEmpty() {
    const localStorageIsEmpty = localStorage.length === 0;
    const sessionStorageIsEmpty = sessionStorage.length === 0;

    if (localStorageIsEmpty) {
        console.log('Local storage is empty.');
    } else {
        console.log('Local storage is not empty. Remaining items:');
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            console.log(`Key: ${key}, Value: ${localStorage.getItem(key)}`);
        }
    }

    if (sessionStorageIsEmpty) {
        console.log('Session storage is empty.');
    } else {
        console.log('Session storage is not empty. Remaining items:');
        for (let i = 0; i < sessionStorage.length; i++) {
            const key = sessionStorage.key(i);
            console.log(`Key: ${key}, Value: ${sessionStorage.getItem(key)}`);
        }
    }
}