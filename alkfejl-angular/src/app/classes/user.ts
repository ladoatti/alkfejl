export class User {
    private _id: number;
    private _name: String;
    private _email: String;
    private _phone: String;
    private _address: String;
    private _role: String;
    
    public constructor(id: number, name: String, email: String, phone: String, address: String, role: String) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;
        this._address = address;
        this._role = role;
    }

    public get id() : number {
        return this._id;
    }

    public get name(): String {
        return this._name;
    }

    public get email(): String {
        return this._email;
    }

    public get phone(): String {
        return this._phone;
    }

    public get address(): String {
        return this._address;
    }

    public get role(): String {
        return this._role;
    }
}
