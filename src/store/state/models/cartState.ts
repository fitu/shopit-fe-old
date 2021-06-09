import Cart from '../../../models/cart';

import ItemState from './itemState';
import ShippingInfoState from './shippingInfoState';

class CartState {
    cartItems: Array<ItemState>;
    shippingInfo: ShippingInfoState;

    constructor(cartItems: Array<ItemState>, shippingInfo: ShippingInfoState) {
        this.cartItems = cartItems;
        this.shippingInfo = shippingInfo;
    }

    static toModel(cartState: CartState): Cart {
        return new Cart(
            cartState.cartItems.map((cartItem) => ItemState.toModel(cartItem)),
            ShippingInfoState.toModel(cartState.shippingInfo),
        );
    }
}

export default CartState;
