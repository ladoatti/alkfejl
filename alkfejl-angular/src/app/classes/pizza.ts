import { Topping } from './topping';

export class Pizza {
    private _id: number;
    private _name: String;
    private _size: number;
    private _price: number;
    private _toppings: Topping[];
    private _imageURL: String;
    
    public constructor(id: number, name: String, size: number, price: number, toppings: Topping[], imageURL: String) {
        this._id = id;
        this._name = name;
        this._size = size;
        this._price = price;
        this._toppings = toppings;
        this._imageURL = imageURL;
    }

    public get id() : number {
        return this._id;
    }

    public get name(): String {
        return this._name;
    }


    public get size(): number {
        return this._size;
    }

    public get price(): number {
        return this._price;
    }

    public get toppings(): Topping[] {
        return this._toppings;
    }


    public get imageURL(): String {
        return this._imageURL;
    }

    public toString(): String {
        return this._name + "\n" + this._size + "cm\n" + this._toppings.toString() + "\n" + this._price + "Ft\n";
    }
}
