import Item from './item';
import ShippingInfo from './shippingInfo';

class Cart {
    cartItems: Array<Item>;
    shippingInfo: ShippingInfo;

    constructor(cartItems: Array<Item> = [], shippingInfo: ShippingInfo = new ShippingInfo('', '', '', '', '')) {
        this.cartItems = cartItems;
        this.shippingInfo = shippingInfo;
    }
}

export default Cart;
