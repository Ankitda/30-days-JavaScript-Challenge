// class Definition Activity - 1

class Person {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }
    static greet(){
        return "Hello ! welcome to JavaScript";
    }

    // getter and setter method for setting and getting the age property 
    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get fullName() {
        return this._firstName + " " + this._lastName;
    }
    set firstName(newName) {
        if(typeof newName === 'string' && newName.length > 0) {
            this._firstName = newName;
        }else{
            console.error('Invalid age');
        }
    }

    set lastName(newName) {
        if(typeof newName === 'string' && newName.length > 0) {
            this._lastName = newName;
        }else{
            console.error('Invalid age');
        }
    }

    greeting() {
        return `Hello ${this._firstName + " " + this._lastName} with age of ${this._age} years ! welcome to JavaScript`;
    }

    // methods for setting and getting the age property 
    getAge() {
        return this._age;
    }
    setAge(newAge) {
        if(typeof newAge === 'number' && newAge > 0) {
            this._age = newAge;
        }else{
            console.error('Invalid age');
        }        
    }
}

const personObj = new Person("Ankit","Das", 22);
console.log(personObj.greeting())

console.log("Before Age Updated ",personObj.getAge())
personObj.setAge(23);
console.log("After Age Updated ",personObj.getAge())

// class inheritance Activity - 2

class Student extends Person {
    static noOfStudents = 0;
    constructor(firstName, lastName, age, studentId) {
        super(firstName, lastName, age);
        this.studentId = studentId;
        Student.noOfStudents += 1;
    }
    getStudentId() {
        return this.studentId;
    }

    // @override method
    greeting() {
        return `Hello ${this.fullName} with age of ${this.getAge()} years and student id of ${this.studentId} ! welcome to JavaScript`;
    }
} 

const studentObj = new Student("Ankit","Das", 22, 1901229028);
console.log(studentObj.getStudentId())
console.log(studentObj.greeting());

// static methods and properties Activity - 3 

const student1 = new Student("shoumen", 26, 1901229056);
const student2 = new Student("Anjali", 23, 1901229045);

console.log(Student.greet());

console.log("No of Student object created are ",Student.noOfStudents);

// getters and setters Activity - 4

const person1 = new Person("Anshuman","khurana", 30);

console.log("Before setting fullName ",person1.fullName);

person1.firstName = "Ankit";
person1.lastName = "Das";

console.log("After setting fullName ",person1.fullName);

// Private Fields Activity - 5

class Account{
    #balance;
    constructor(balance = 0){
        this.#balance = balance;
    }

    depositMoney(amount){
        if(typeof amount === 'number' && amount > 0) {
            console.log(`Deposited ${amount} successfully`);
            this.#balance += amount;
            console.log(`Current balance is ${this.#balance}`);
        }else{
            console.error('Invalid Amount can\'t be deposited');
        }
    }

    whithdrawMoney(amount){
        if(typeof amount === 'number' && amount > 0 && amount <= this.#balance) {
            console.log(`Withdrawn ${amount} successfully`);
            this.#balance -= amount;
            console.log(`Current balance is ${this.#balance}`);
        }else{
            console.error('Amount can\'t be withdraw');
        }
    }

    getBalance(){
        return this.#balance;
    }
} 

const abhisekAccount = new Account(1000);

console.log("Before depositing and whitdrawing money : ",abhisekAccount.getBalance());

abhisekAccount.depositMoney(500);

abhisekAccount.whithdrawMoney(200);

abhisekAccount.whithdrawMoney(1300);

abhisekAccount.whithdrawMoney(1300);



