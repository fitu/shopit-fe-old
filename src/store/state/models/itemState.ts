import Item from '../../../models/item';

import ProductState from './productState';

class ItemState {
    id: string;
    product: ProductState;
    quantity: number;

    constructor(id: string, product: ProductState, quantity: number) {
        this.id = id;
        this.product = product;
        this.quantity = quantity;
    }

    static toModel(itemState: ItemState): Item {
        return new Item(itemState.id, ProductState.toModel(itemState.product), itemState.quantity);
    }
}

export default ItemState;
