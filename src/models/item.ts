import Image from './image';
import Product from './product';

class Item {
    id: string;
    product: Product;
    name: string;
    price: number;
    images: Array<Image>;
    quantity: number;

    constructor(id: string, product: Product, name: string, price: number, images: Array<Image>, quantity: number) {
        this.id = id;
        this.product = product;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.images = images;
    }
}

export default Item;
