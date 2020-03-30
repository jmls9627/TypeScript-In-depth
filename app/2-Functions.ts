
const biographyBooks = GetBookTitleByCategory(Category.Biography);
biographyBooks.forEach((val,indx,arr)=>console.log(++indx + " - " + val));

/////////
function GetBookID(id:number){
    return allBooks.filter(book=> book.id===id)[0];
}

/////////
function CreateCustomerByID(name:string, id:number){
    return name + " " + id;
}
/////////
function CreateCustomer(name: string, age?: number, city?: string):void{
    console.log("creating customer: " +name);
    if(age){
        console.log("Age: "+ age);
    }
    if(city){
        console.log("City: " + city);
    }
}

/////////////////
function CheckOutBooks(customer:string, ...bookIDs:number[]):string[]{
    
    console.log("Checking out books for " + customer);
  
     let booksCheckedOut:string[]=[];
  
  for(let id of bookIDs){
      let book=GetBookID(id);
      if(book.available){
          booksCheckedOut.push(book.title);
      }
  }
return booksCheckedOut;
}

let myBook:string[]= CheckOutBooks("thorne",1,3,4);
myBook.forEach(title=> console.log(title));


function GetTitles(author:string):string[];
function GetTitles(available:boolean):string[];
function GetTitles(bookProperty: any):string[]{
    
    const allBooks=GetAllOfBooks();
    const foundTitles: string[]=[];
    
    if(typeof bookProperty=='string'){
        //get all books by a particular author
        for(let book of allBooks){
            if(book.author===bookProperty){
                foundTitles.push(book.title);
            }
        }
    }
else if( typeof bookProperty=='boolean'){
    //get all books based on specified availability
    for(let book of allBooks){
        if(book.available===bookProperty){
            foundTitles.push(book.title);
        }
    }
}
return foundTitles;
}

let Books=GetTitles('string|bool');
Books.forEach(title=>console.log(title));



//LogFirstAvailable();
//biographyBooks.forEach(title=>console.log(title));


//CreateCustomer("Pepone",23,"havana");
//CreateCustomer("Lily");

/************************************************** */
/*let x :number;
x=5;

let IdGenarator:(chars:string,nums:number)=>string;
//IdGenarator=CreateCustomerByID;
IdGenarator=(name:string, id:number)=>{
    return id+name;
}

let myID: string=IdGenarator('JM',23);
console.log(myID);
*/