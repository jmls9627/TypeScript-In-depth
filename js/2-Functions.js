"use strict";
var biographyBooks = GetBookTitleByCategory(Category.Biography);
biographyBooks.forEach(function (val, indx, arr) { return console.log(++indx + " - " + val); });
function GetBookID(id) {
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerByID(name, id) {
    return name + " " + id;
}
function CreateCustomer(name, age, city) {
    console.log("creating customer: " + name);
    if (age) {
        console.log("Age: " + age);
    }
    if (city) {
        console.log("City: " + city);
    }
}
biographyBooks.forEach(function (title) { return console.log(title); });
//# sourceMappingURL=2-Functions.js.map