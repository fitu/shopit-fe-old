import ItemState from './itemState';
import ShippingInfoState from './shippingInfoState';

class CartState {
    constructor(public cartItems: Array<ItemState>, public shippingInfo: ShippingInfoState) {}
}

export default CartState;
