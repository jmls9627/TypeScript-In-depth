var HelloWord = /** @class */ (function () {
    function HelloWord(message) {
        this.message = message;
    }
    return HelloWord;
}());
var hello = new HelloWord("Wello Word");
console.log(hello.message);
////////////////////////////////////
function GetAllOfBooks() {
    var books = [
        { title: "Reino de este Mundo", author: "Alejo Carpentier", available: true },
        { title: "Viaje al centro de la tierra", author: "Julio Verne", available: false },
        { title: "Paradizo", author: "Jose Lezama", available: true },
        { title: 'Silencios', author: 'Karla Suárez', available: true }
    ];
    return books;
}
function LogFirstAvailable(books) {
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
var allBooks = GetAllOfBooks();
//allBooks.push({title:'Silencios',author:'Karla Suárez', available:true});
LogFirstAvailable(allBooks);
//# sourceMappingURL=app.js.map