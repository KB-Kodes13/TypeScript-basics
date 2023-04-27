"use strict";
// Create an array books with the type Book[] and add a few sample books to the array.
const books = [
    {
        id: 1,
        title: "Can't Hurt Me",
        author: "David Goggins",
        published: new Date("2018-12-04"),
        available: true,
    },
    {
        id: 2,
        title: "A Promised Land",
        author: "Barack Obama",
        published: new Date("2020-11-17"),
        available: false,
    },
    {
        id: 3,
        title: "Risky Is the New Safe",
        author: "Randy Gage",
        published: new Date("2013-10-22"),
        available: true,
    },
];
//Define a function addBook(book: Book): void that takes a Book object as a parameter and adds it to the books array.
function addBook(book) {
    books.push(book);
}
//Define a function findBookById(id: number): Book | undefined that takes a book id as a parameter and returns the book 
//with the given id or undefined if the book is not found. 
function findBookById(id) {
    return books.find((book) => book.id === id);
}
//Define a function updateBook(book: Book): boolean that takes a Book object as a parameter, finds the book with the same id in
// the books array, and updates its properties. The function should return true if the book was updated successfully or false if 
//the book was not found.
function updateBook(book) {
    const index = books.findIndex((bk) => bk.id === book.id);
    if (index === -1) {
        return false;
    }
    books[index] = book;
    return true;
}
//Define a function removeBook(id: number): boolean that takes a book id as a parameter and removes the book with the given id from the books array. 
//The function should return true if the book was removed successfully or false if the book was not found.
function removeBook(id) {
    const index = books.findIndex((book) => book.id === id);
    if (index === -1) {
        return false;
    }
    books.splice(index, 1);
    return true;
}
//Test your functions by adding, updating, and removing books, and finding books by their id.
// add a book to the library
const newBook = {
    id: 4,
    title: "The Alchemist",
    author: "Paulo Coelho",
    published: new Date("1988-01-01"),
    available: true,
};
addBook(newBook);
// find a book by its id
const bookById = findBookById(2);
if (bookById) {
    console.log(`Book with id 2: ${bookById.title} by ${bookById.author}`);
}
else {
    console.log("Book not found.");
}
// update a book's properties
const updatedBook = {
    id: 3,
    title: "Risky Is the New Safe (Revised)",
    author: "Randy Gage",
    published: new Date("2019-01-01"),
    available: true,
};
const isBookUpdated = updateBook(updatedBook);
if (isBookUpdated) {
    console.log(`id 3 has been updated.`);
}
else {
    console.log("Book not found.");
}
// remove a book from the library
const isBookRemoved = removeBook(1);
if (isBookRemoved) {
    console.log(`id 1 has been removed.`);
}
else {
    console.log("Book not found.");
}
