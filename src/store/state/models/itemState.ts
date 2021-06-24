import ProductState from './productState';

class ItemState {
    constructor(public id: string, public product: ProductState, public quantity: number) {}
}

export default ItemState;
