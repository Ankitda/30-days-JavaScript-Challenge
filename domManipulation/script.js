// selecting and manipulating elements Activity - 1

function changeBgColor() {
    const header = document.getElementById("header");
    header.innerText = "Hello World";
    const container = document.querySelector(".container");
    container.style.backgroundColor = 'blue';
}

// creating and appending elements Activity - 2

function appendDiv() {

    const lists = ["apple", "mango", "banana", "grapes"];

    const tagetDiv = document.getElementById("tagetDiv");
    const newDiv = document.createElement("div");
    const list = document.getElementById("list");

    const content = document.createTextNode("New Text have been created");
    newDiv.appendChild(content);
    tagetDiv.appendChild(newDiv);

    lists.forEach(item => {
        const li = document.createElement("li");
        const liText = document.createTextNode(item);
        li.appendChild(liText);
        list.appendChild(li);
    })
}

// Removing Elements Activity - 3

function removeMe() {
    const element = document.getElementById("para");
    const removeLastChild = document.getElementById("para1");
    if (element) {
        element.remove();
    }
    if (removeLastChild.lastElementChild) {
        removeLastChild.lastElementChild.remove();
    }
}

// Modifying Attributes and Classes Activity - 4

function changeDivClass(){
    const targetDiv = document.getElementById('target-div');
    targetDiv.setAttribute('class', 'new-class');
}   

function addClass(){
    const selectedDiv = document.getElementById('target-class');
    selectedDiv.classList.add('change-class');
}

function removeClass(){
    const selectedDiv = document.getElementById('target-class');
    selectedDiv.classList.remove('change-class');
}

// Event Handling Activity - 5

function changePara(){
    const para = document.getElementById('p1');
    para.textContent = 'content changed of the paragraph';
}

const button = document.getElementById('change');
button.addEventListener('click', changePara);

const border = document.getElementById('border');

border.addEventListener('mouseover', () => {
    border.style.borderColor = 'red';
})
border.addEventListener('mouseleave', () => {
    border.style.borderColor = 'black';
})