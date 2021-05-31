import _ from 'lodash';
import CartState from './cartModel';
import { ADD_TO_CART } from '../../actions/cart/models/addToCartAction';
import { REMOVE_ITEM_FROM_CART } from '../../actions/cart/models/removeItemFromCart';
import { SAVE_SHIPPING_INFO } from '../../actions/cart/models/saveShippingInfo';
import { CLEAR_CART } from '../../actions/cart/models/clearCart';
import { CartActions } from '../../actions/cart/actions';
import Item from '../../../models/item';

const initialCartState = new CartState();

const cartReducer = (state = initialCartState, action: CartActions): CartState => {
    switch (action.type) {
        case ADD_TO_CART: {
            const item = action.payload;
            const isItemExists = _.find(state.cartItems, ['product', item.product.id]);
            if (isItemExists) {
                return {
                    ...state,
                    cartItems: _.map(state.cartItems, (cartItem: Item) =>
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
                cartItems: _.reject(state.cartItems, (cartItem: Item) => cartItem.product !== action.payload),
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
