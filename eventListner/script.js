
// Basic Event Handling Activity - 1

const text = document.getElementById('header');
const textButton = document.getElementById('changeText');
const img = document.getElementById('img');
const imgButton = document.getElementById('changeImg');

textButton.addEventListener('click', () => {
    text.textContent = 'hello world';   
})

imgButton.addEventListener('dblclick', function(){

    if(img.style.visibility === 'hidden') {
        img.style.visibility = 'visible';
    }else{
        img.style.visibility = 'hidden';
    }
})

// Mouse Events Activity - 2

const targetDiv = document.getElementById('target-container');
targetDiv.addEventListener('mouseover', () => {
    targetDiv.style.backgroundColor = 'green';
})

targetDiv.addEventListener('mouseleave', () => {
    targetDiv.style.backgroundColor = 'rebeccapurple';
})

// Keyboard Events Activity - 3

const input = document.getElementById('input');
const para = document.getElementById('para');
input.addEventListener('keydown', () => {
    console.log(input.value);
})
input.addEventListener('keyup' , () => {
    para.textContent = input.value;
})

// Form Events Activity - 4

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(`fetched value is ${event.target.name.value} and ${event.target.password.value}`);
})

const result = document.getElementById('showValue');
const dropdown = document.getElementById('dropdown');
dropdown.addEventListener('change', (event) => {
    const valueSelected = event.target.value;
    result.textContent = `value selected is ${valueSelected}`;
})

// Event Delegation Activity - 5

const list = document.getElementById('list');
list.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'LI') {
        console.log(event.target.textContent);
    }
})

const parentContainer = document.getElementById('parentContainer');
const addElement = document.getElementById('addElement'); 

parentContainer.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'BUTTON') {
        console.log(`Event ${event.target.nodeName} is added to the parent element with context ${event.target.textContent}`); 
    }
});

function addNewButton() {
    const newButton = document.createElement('button');
    newButton.textContent = 'New Button';
    newButton.style.marginRight = '10px';
    parentContainer.appendChild(newButton);
}

addElement.addEventListener('click', addNewButton);    