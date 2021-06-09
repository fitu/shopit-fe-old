import ItemState from '../store/state/models/itemState';

import Product from './product';

class Item {
    id: string;
    product: Product;
    quantity: number;

    constructor(id: string, product: Product, quantity: number) {
        this.id = id;
        this.product = product;
        this.quantity = quantity;
    }

    static toState(item: Item): ItemState {
        return new ItemState(item.id, Product.toState(item.product), item.quantity);
    }
}

export default Item;
