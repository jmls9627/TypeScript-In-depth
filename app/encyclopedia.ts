import {ReferenceItem} from './4-Classes'

export default class Encyclopedia extends ReferenceItem{

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