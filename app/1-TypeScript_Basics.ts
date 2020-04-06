import{Book,logger,Author,Librarian,Magazine} from './3-Interfaces';
import{UniversityLibrarian,ReferenceItem} from './4-Classes';
import{CalcLateFee as calFee, MaxBooksAllowed as MaxB, Purge} from '../lib/UtilityFunction'
import refBook from './encyclopedia'; 
import Shelf from './4.1-ShelfClass';


let reference =new refBook('fact Book', 2016, 1);


//let fee = calFee(5);
//let max=MaxB(12);

 export enum Category{ Biography, Poetry, Fiction, History, Children,Software};

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

//**************GENERIC**************** */
let inventory:Array<Book> =[
    {id: 10, title:"C", author:"K & R",available:true, category:Category.Software },
    {id: 11, title:"Code Complete", author:"Steve McConnell",available:true, category:Category.Software  },
    {id: 12, title:"8-Bit", author:"A.B",available:true, category:Category.Software  },
    {id: 13, title:'Scripts',author:'C.D', available:true,category:Category.Software }
];


//Purge<Book>(inventory);
let purgeBook:Array<Book>=Purge<Book>(inventory);
purgeBook.forEach(book =>console.log(book.title));

let purgedNums:Array<number>=Purge<number>([1,2,3,4]);
console.log(purgedNums);
 
/////// generic class

let bookShelf:Shelf<Book>=new Shelf<Book>();
inventory.forEach(book=>bookShelf.addItem(book));

let fistBook: Book =bookShelf.getfirs();

let magazines: Array<Magazine>=[
    {title:'PLM',publisher:'Cod Mags'},
    {title:'LFQ',publisher:'Collg Press'},
    {title:'FP',publisher:'GSU'}
];

let magazinesShelf:Shelf<Magazine>=new Shelf<Magazine>();
magazines.forEach(mag=>magazinesShelf.addItem(mag));

let firstMagazine:Magazine=magazinesShelf.getfirs();

//let numberShelf:Shelf<number>=new Shelf<number>();
//[5,10,15].forEach(num=>numberShelf.addItem(num));

magazinesShelf.printTitles();
let SoftwareBook= bookShelf.find('Silencios');
console.log(`${SoftwareBook} (${SoftwareBook.author})`);

