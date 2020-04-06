

import { Category } from "./1-TypeScript_Basics";

interface Book{
    id:number;
    title:string;
    author:string;
    available:boolean;
    category: Category;
    pages?:number;
    markDamaged?:DamagedLogger;
    }

    interface DamagedLogger{
       (reason:string):void;
    }

    interface Person{
       name:string;
       email:string;
    }
 
   interface Author extends Person{
     NumBookPublished:number;
   }

   interface Librarian extends Person{
      depart:string;
      assistCustomer:(custName:string)=>void;
   }

   interface Magazine{
      title:string;
      publisher:string;
   }

 export {Book, DamagedLogger as logger,Author,Librarian,Magazine}; 