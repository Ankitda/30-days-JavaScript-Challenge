// object creation and access Activity - 1

let bookInformation = {
    title : "The Great Gatsby",
    author : "F. Scott Fitzgerald",
    year : 1925
}

// console.log(bookInformation);

// By using Constructor function 
function CreateBook(){
    this.title = "The Great Gatsby";
    this.author = "F. Scott Fitzgerald";
    this.year = 1925
}

const bookDetails = new CreateBook();
// console.log(bookDetails);

// By using Instance of object 
const bookInfo = new Object()
bookInfo["title"] = "The Great Gatsby";
bookInfo["author"] = "F. Scott Fitzgerald";
bookInfo["year"] = 1925

// console.log("Properties of book object logged : ",bookInfo.title + " " +bookInfo.author);

// object methods Activity - 2

bookInformation.logValues = function(){
    return `${this.title} is written by author ${this.author}`
}

// console.log(bookInformation.logValues());

bookInformation.updateYear = function(year){
    this.year = year
}

// console.log("Before update : ",bookInformation.year);
// bookInformation.updateYear(2020)
// console.log("After update : ",bookInformation.year);

// nested objects Activity - 3 

const library = {
    name : "The Great Library",
    books : [
        {
            title : "The Great Gatsby",
            author : "F. Scott Fitzgerald",
            year : 1925
        },
        {
            title : "The Catcher in the Rye",
            author : "J. D. Salinger",
            year : 1951
        },
        {
            title : "Moby Dick",
            author : "Herman Melville",
            year : 1851
        }
    ]
}

// console.log(library);
// console.log("Library name : ",library.name);
// library.books.forEach(book => console.log(book.title))

// This keyword Activity - 4   

bookInformation.createdAt = function(){
    return `${this.title} book was created in ${this.year}`
}

// console.log(bookInformation.createdAt());

// object iteration Activity - 5

for(let key in bookInformation){
    console.log(`${key} : ${bookInformation[key]}`)
}

console.log(Object.keys(bookInformation));
console.log(Object.values(bookInformation));