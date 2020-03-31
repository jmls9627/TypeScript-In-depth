import {Book,DamagedLogger, Author, Librarian} from './3-Interfaces';


///////////////
 class UniversityLibrarian implements Librarian{

    name:string;
    email:string;
    depart:string;

 assistCustomer(custName:string){
     console.log(this.name +" is assisting " + custName);
 }    
}

/*****************************************/

/////////////////
abstract class ReferenceItem{
    
     private _publisher:string;
    
    static departament:string='Research';
   
    constructor(public title: string, protected year: number){
        console.log('creating a new ReferenceItem...');
        console.log(`Depart: ${ReferenceItem.departament}`);
    }

    printItem():void{
        console.log(`${this.title} was published in ${this.year}`);
    }

    
     get publisher() : string {
        return this._publisher.toUpperCase();
    }
    
    
     set publisher(newPublisher : string) {
        this.publisher = newPublisher;
    }  

     abstract printCitation():void;
}

////////////
class Encyclopedia extends ReferenceItem{

    constructor(newTitle:string, NewYear:number, public edition:number){
      super(newTitle,NewYear);
    }
       printItem():void{
           super.printItem();
           console.log(`Edition: ${this.edition} (${this.year})`);
       }
         printCitation():void{
             console.log(`${this.title} - ${this.year}`)

         }


}

export{UniversityLibrarian,ReferenceItem,Encyclopedia};