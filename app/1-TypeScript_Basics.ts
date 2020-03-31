import{Book,DamagedLogger,Author,Librarian} from './3-Interfaces';
import{UniversityLibrarian,ReferenceItem} from './4-Classes'
 
 export enum Category{ Biography, Poetry, Fiction, History, Children};

////////////
export function GetAllOfBooks():Book[]{
     let books =[
         {id: 1, title:"Reino de este Mundo", author:"Alejo Carpentier",available:true, category:Category.History },
         {id: 2, title:"Viaje al centro de la tierra", author:"Julio Verne",available:false, category:Category.Fiction },
         {id: 3, title:"Paradizo", author:"Jose Lezama",available:true, category:Category.Biography },
         {id: 4, title:'Silencios',author:'Karla Suárez', available:true,category:Category.Biography}
     ];

     return books;
}

const allBooks = GetAllOfBooks();////
//allBooks.push({title:'Silencios',author:'Karla Suárez', available:true});

////////////
function LogFirstAvailable(books=GetAllOfBooks()):void{
    
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
export function GetBookTitleByCategory(categoryFilter:Category=Category.Fiction): Array<string> {
    
   console.log("Gettiing books in Category: " + Category[categoryFilter]);
    
    const allBooks=GetAllOfBooks();
    const filteredTitles: string[]=[];

    for(let currentBook of allBooks){
        if(currentBook.category===categoryFilter){
            filteredTitles.push(currentBook.title)
        }
    }

    return filteredTitles;        
}
const HistoryBooks = GetBookTitleByCategory(Category.History);//////

//////////////
function LogBookTitles(titles:string[]):void{
    
    for(let title of titles){
        console.log(title);
    }
} 
LogBookTitles( HistoryBooks);//////




