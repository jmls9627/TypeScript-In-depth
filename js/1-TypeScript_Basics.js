var HelloWord = (function () {
    function HelloWord(message) {
        this.message = message;
    }
    return HelloWord;
}());
var hello = new HelloWord("Wello Word");
console.log(hello.message);
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
;
function GetAllOfBooks() {
    var books = [
        { id: 1, title: "Reino de este Mundo", author: "Alejo Carpentier", available: true, category: Category.History },
        { id: 2, title: "Viaje al centro de la tierra", author: "Julio Verne", available: false, category: Category.Fiction },
        { id: 3, title: "Paradizo", author: "Jose Lezama", available: true, category: Category.Biography },
        { id: 4, title: 'Silencios', author: 'Karla Suárez', available: true, category: Category.Biography }
    ];
    return books;
}
var allBooks = GetAllOfBooks();
function LogFirstAvailable(books) {
    if (books === void 0) { books = GetAllOfBooks(); }
    var cantofBooks = books.length;
    var firtsAvailable = "";
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firtsAvailable = currentBook.title;
            break;
        }
    }
    console.log("total books: " + cantofBooks);
    console.log("First Available: " + firtsAvailable);
}
LogFirstAvailable(allBooks);
function GetBookTitleByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = Category.Fiction; }
    console.log("Gettiing books in Category: " + Category[categoryFilter]);
    var allBooks = GetAllOfBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
var HistoryBooks = GetBookTitleByCategory(Category.History);
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
LogBookTitles(HistoryBooks);
//# sourceMappingURL=1-TypeScript_Basics.js.map