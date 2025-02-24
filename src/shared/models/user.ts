export class User {

    id?: string;
    name?: string;
    username?: string;
    phoneNumber?:string;
    email?: string;
    address?: string;
    password?: string;

    constructor(id?: string, name?: string, username?: string, phoneNumber?:string,  email?: string, address?: string, password?: string) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        }
}