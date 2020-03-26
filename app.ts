class HelloWord{
constructor(public message:string){}
}
 var hello= new HelloWord("Wello Word");
 console.log(hello.message);
 ////////////////////////////////////
 
 enum Category{ Biography, Poetry, Fiction, History, Children};

////////////
 function GetAllOfBooks(){
     let books =[
         {title:"Reino de este Mundo", author:"Alejo Carpentier",available:true, category:Category.History },
         {title:"Viaje al centro de la tierra", author:"Julio Verne",available:false, category:Category.Fiction },
         {title:"Paradizo", author:"Jose Lezama",available:true, category:Category.Biography },
         {title:'Silencios',author:'Karla Suárez', available:true,category:Category.Biography}
     ];

     return books;
}

const allBooks = GetAllOfBooks();////
//allBooks.push({title:'Silencios',author:'Karla Suárez', available:true});

////////////
function LogFirstAvailable(books):void{
    
    let cantofBooks: number= books.length;
    let firtsAvailable: string="";
   
    for(let currentBook of books){

        if(currentBook.available){
            firtsAvailable=currentBook.title;
            break;
        }
    }
    console.log("total books: " + cantofBooks );
    console.log("First Available: "+ firtsAvailable);
}
LogFirstAvailable(allBooks);////

///////////////
function GetBookTitleByCategory(categoryFilter:Category): Array<string> {
    
    console.log("gettiing books in category: " + Category[categoryFilter]);
    
    const allBooks=GetAllOfBooks();
    const filteredTitles: string[]=[];

    for(let currentBook of allBooks){
        if(currentBook.category===categoryFilter){
            filteredTitles.push(currentBook.title)
        }
    }

    return filteredTitles;        
}
const PoetryBooks = GetBookTitleByCategory(Category.Poetry);//////

//////////////
function LogBookTitles(titles:string[]):void{
    
    for(let title of titles){
        console.log(title);
    }
}
LogBookTitles(PoetryBooks);//////



