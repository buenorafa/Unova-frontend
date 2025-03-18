export class CartItem {
    id?: number;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
    version: number;
 
  
    constructor(
      id?: number,
      name: string = '',
      price: number = 0,
      quantity: number = 0,
      imageUrl: string = '',
      version: number = 0
    ) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.imageUrl = imageUrl;
      this.version = version;
    }
  }
  