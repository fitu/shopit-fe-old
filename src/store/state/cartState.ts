import Cart from '../../models/cart';

import ItemState from './itemState';
import ShippingInfoState from './shippingInfoState';

class CartState {
    cartItems: Array<ItemState>;
    shippingInfo: ShippingInfoState;

    constructor(
        cartItems: Array<ItemState> = [],
        shippingInfo: ShippingInfoState = new ShippingInfoState('', '', '', '', ''),
    ) {
        this.cartItems = cartItems;
        this.shippingInfo = shippingInfo;
    }

    static fromModelToState(cart: Cart): CartState {
        return new CartState(
            cart.cartItems.map((cartItem) => ItemState.fromModelToState(cartItem)),
            ShippingInfoState.fromModelToState(cart.shippingInfo),
        );
    }

    static fromStateToModel(cartState: CartState): Cart {
        return new Cart(
            cartState.cartItems.map((cartItem) => ItemState.fromStateToModel(cartItem)),
            ShippingInfoState.fromStateToModel(cartState.shippingInfo),
        );
    }
}

export default CartState;
