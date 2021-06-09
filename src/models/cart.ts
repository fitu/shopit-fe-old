import CartState from '../store/state/models/cartState';

import Item from './item';
import ShippingInfo from './shippingInfo';

class Cart {
    cartItems: Array<Item>;
    shippingInfo: ShippingInfo;

    constructor(cartItems: Array<Item> = [], shippingInfo: ShippingInfo = new ShippingInfo('', '', '', '', '')) {
        this.cartItems = cartItems;
        this.shippingInfo = shippingInfo;
    }

    static toState(cart: Cart): CartState {
        return new CartState(
            cart.cartItems.map((item) => Item.toState(item)),
            ShippingInfo.toState(cart.shippingInfo),
        );
    }
}

export default Cart;
