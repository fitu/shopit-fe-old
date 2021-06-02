import CartState from './cartState';

class StoreState {
    cart: CartState;

    constructor(cart: CartState) {
        this.cart = cart;
    }
}

export default StoreState;
