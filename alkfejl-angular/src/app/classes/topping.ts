export class Topping {
    private _id: number;
    private _name: String;
    
    public constructor(id: number, name: String) {
        this._id = id;
        this._name = name;
    }

    public get id() : number {
        return this._id;
    }

    public get name(): String {
        return this._name;
    }

    public toString() : String {
        return this._name;
    }
}
