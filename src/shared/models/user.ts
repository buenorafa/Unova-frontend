import { Product } from "./product";

export class User {

    id?: number;
    name?: string;
    username?: string;
    phoneNumber?:string;
    email?: string;
    address?: string;
    password?: string;
    products:Product[] = [];

    constructor(id?: number, name?: string, username?: string, phoneNumber?:string,  email?: string, address?: string, password?: string, products?: Product[]) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.products = products || [];
        }
}