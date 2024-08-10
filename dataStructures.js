class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;

// console.log(node1.next.next.value);

class LinkedList{
    constructor(){
        this.head = null;
    }

    add(value){
        const newNode = new Node(value);
        if(!this.head){
            console.log("this.head is null");  
            this.head = newNode;
            return;          
        }

        let currentNode = this.head;
        while(currentNode.next){
            currentNode = currentNode.next;
        }
        currentNode.next = newNode
    }

    removeLast(){
        if(!this.head){
            return null;
        }

        if(!this.head.next){
            let removeNode = this.head;
            this.head = null;
            return removeNode.value;
        }

        let currentNode = this.head;
        while(currentNode.next && currentNode.next.next){
            currentNode = currentNode.next;
        }

        let lastElement = currentNode.next
        currentNode.next = null;
        return lastElement.value;
    }

    display(){
        if(!this.head){
            console.log("List is Empty");
        }

        let currentNode = this.head;
        while(currentNode){
            console.log("node value : ", currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

const list = new LinkedList();
list.add(2);
list.add(10);
list.add(8);
// list.display();
// console.log(list.removeLast());
// list.display();

class Stack{
    constructor(){
        this.array = new Array();
    }

    push(value){
        this.array[this.array.length] = value;
    }

    pop(){
        if(this.array.length === 0){
            return -1;
        }
        let removeElement = this.array[this.array.length-1];
        this.array.length = this.array.length-1;
        return removeElement;
    }

    peek(){
        let removeElement = this.array[this.array.length-1];
        return removeElement;
    }
}

const arr = new Stack();
arr.push(2);
arr.push(10);
arr.push(90);
// console.log(arr.pop());
// console.log(arr.peek());

function reverse(str){
    const stack = new Stack();
    let reverseString = "";
    for(let i=0; i<str.length; i++){
        stack.push(str[i]);
    }
    for(let i=stack.array.length-1; i>=0 ; i--){
        reverseString += stack.pop();
    }
    return reverseString;
}

// console.log(reverse("Ankit"));

class Queue{
    constructor(){
        this.array = new Array();
    }

    enqueue(value){
        this.array[this.array.length] = value;
    }

    dequeue(){
        if(this.array.length === 0){
            return -1;
        }     
        const firstElement = this.array[0];
        let iterator = 1;
        let remainingElement = [];
        while(iterator < this.array.length){
            remainingElement[iterator-1] = this.array[iterator];
            iterator++;
        }
        this.array = remainingElement;
        return firstElement;
    }

    front(){
        if(this.array.length === 0){
            console.log("Array is Empty");
        }else{
            console.log(this.array[0]);
        }
    }
}

// const queue = new Queue();
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// console.log(queue.array);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// queue.front();
// console.log(queue.array);

function executeProcess(...args){
    let iterator = 1;
    const queue = new Queue();
    for(let item of args){
        queue.enqueue(item);
    }
    const length = queue.array.length;
    while(iterator <= length){
        console.log(`${iterator} STEP -> ${queue.dequeue()}`)
        iterator++;
    }      
}

// executeProcess("make a dough", "pepare the sauce", "prepare the vegetables", "align vegetables, sauce and dough together", "bake it for 10 minutes", "pizza is Done");

class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const rootNode = new TreeNode(10);
rootNode.left = new TreeNode(20);
rootNode.right = new TreeNode(30);

console.log(
    ` ${rootNode.value}   ${rootNode.left.value} ${rootNode.right.value} `
)

class BinaryTree{
    constructor(){
        this.root = null;
    }
    
    insert(value){
        const newNode = new TreeNode(value);

        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode){
        if(newNode.value < node.value){
            if(node.left === null){
                node.left = newNode;
            }else{
                this.insertNode(node.left, newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                this.insertNode(node.right, newNode);
            }
        }

    }

    inOrderTraversal(node = this.root){
        if(node !== null){
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right)
        }else{
            return `cannot traverse a empty tree`;
        }
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log("In-order Traversal:");
tree.inOrderTraversal();