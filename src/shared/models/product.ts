export class Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  isActive: boolean;
  imageUrl: string;

  constructor(
    id?: number,
    name: string = '',
    description: string = '',
    price: number = 0,
    quantity: number = 0,
    isActive: boolean = true,
    imageUrl: string = ''
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    this.isActive = isActive;
    this.imageUrl = imageUrl;
  }
}
