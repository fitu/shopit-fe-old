import Item from './Item';
import ShippingInfo from './ShippingInfo';

// TODO: add null object
class Cart {
    constructor(public cartItems: Array<Item>, public shippingInfo: ShippingInfo) {}
}

export default Cart;
