class HelloWord{
constructor(public message:string){}
}
 var hello= new HelloWord("Wello Word");
 console.log(hello.message);
 ////////////////////////////////////

 function GetAllOfBooks(){
     let books =[
         {title:"Reino de este Mundo", author:"Alejo Carpentier",available:true },
         {title:"Viaje al centro de la tierra", author:"Julio Verne",available:false },
         {title:"Paradizo", author:"Jose Lezama",available:true },
         {title:'Silencios',author:'Karla Suárez', available:true}
     ];

     return books;
}

function LogFirstAvailable(books){
    
    let cantofBooks= books.length;
    let firtsAvailable="";
   
    for(let currentBook of books){

        if(currentBook.available){
            firtsAvailable=currentBook.title;
            break;
        }
    }
    console.log("total books: " + cantofBooks );
    console.log("First Available: "+ firtsAvailable);
}

const allBooks = GetAllOfBooks();
//allBooks.push({title:'Silencios',author:'Karla Suárez', available:true});
LogFirstAvailable(allBooks);