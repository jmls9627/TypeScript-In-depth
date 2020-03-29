
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

biographyBooks.forEach(title=>console.log(title));


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