import Item from '../../../models/item';
import ShippingInfo from '../../../models/shippingInfo';

class CartState {
    cartItems: Array<Item>;
    shippingInfo: ShippingInfo;

    constructor(cartItems: Array<Item> = [], shippingInfo: ShippingInfo = new ShippingInfo('', '', '', '', '')) {
        this.cartItems = cartItems;
        this.shippingInfo = shippingInfo;
    }
}

export default CartState;
