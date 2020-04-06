//import {Book,DamagedLogger, Author, Librarian} from './3-Interfaces';
import * as Interfaces from './3-Interfaces'

///////////////
 class UniversityLibrarian implements Interfaces.Librarian{

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

//////////// generic

 import default class Shelf <T> {

    private _item:Array<T>=new Array<T>();

    addItem(item:T):void{
        this._item.push(item);
    }

    getfirs():T{
        return this._item[0];
    }
}


export{UniversityLibrarian,ReferenceItem};