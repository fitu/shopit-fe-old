import _ from 'lodash';

import { ADD_TO_CART } from '../../actions/cart/addToCartAction';
import { CartActions } from '../../actions/cart/cartActions';
import { CLEAR_CART } from '../../actions/cart/clearCartAction';
import { REMOVE_ITEM_FROM_CART } from '../../actions/cart/removeItemFromCart';
import { SAVE_SHIPPING_INFO } from '../../actions/cart/saveShippingInfoAction';
import CartState from '../../state/cartState';
import ItemState from '../../state/itemState';

const initialCartState = new CartState();

const cartReducer = (state = initialCartState, action: CartActions): CartState => {
    switch (action.type) {
        case ADD_TO_CART: {
            const item = action.payload;
            const isItemExists = _.find(state.cartItems, ['product', item.product.id]);
            if (isItemExists) {
                return {
                    ...state,
                    cartItems: _.map(state.cartItems, (cartItem: ItemState) =>
                        cartItem.product === isItemExists.product ? item : cartItem,
                    ),
                };
            }
            return {
                ...state,
                cartItems: [...state.cartItems, item],
            };
        }
        case REMOVE_ITEM_FROM_CART: {
            return {
                ...state,
                cartItems: _.reject(state.cartItems, (cartItem: ItemState) => cartItem.product !== action.payload),
            };
        }
        case SAVE_SHIPPING_INFO: {
            return {
                ...state,
                shippingInfo: action.payload,
            };
        }
        case CLEAR_CART: {
            return {
                ...state,
                cartItems: [],
            };
        }
        default: {
            return state;
        }
    }
};

export { cartReducer };
