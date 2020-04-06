
interface ShelfInterface{
    title:string
}

export default class Shelf<T extends ShelfInterface > {

    private _item:Array<T>=new Array<T>();

    addItem(item:T):void{
        this._item.push(item);
    }

    getfirs():T{
        return this._item[0];
    }

    find(title:string):T {
        return this._item.filter(item=>item.title===title)[0];
    }

    printTitles():void{
        this._item.forEach(item=>console.log(item.title));
    }
}