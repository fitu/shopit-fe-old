import _ from 'lodash';

import { ADD_PRODUCT_TO_CART_SUCCESS, ADD_PRODUCT_TO_CART_FAIL } from '../../actions/cart/actions/addToCartActions';
import { CLEAR_CART_ERRORS } from '../../actions/cart/actions/clearCartErrorsActions';
import {
    REMOVE_ITEM_FROM_CART_SUCCESS,
    REMOVE_ITEM_FROM_CART_FAIL,
} from '../../actions/cart/actions/removeItemFromCartActions';
import { SAVE_SHIPPING_INFO } from '../../actions/cart/actions/saveShippingInfoActions';
import { CartActions } from '../../actions/cart/cartActions';
import CartStateModel from '../../state/models/cartState';
import ItemState from '../../state/models/itemState';
import ShippingInfoState from '../../state/models/shippingInfoState';

type CartState = {
    cart: CartStateModel;
    errorMessage: string;
};

const initialState = {
    cart: {
        cartItems: [],
        shippingInfo: new ShippingInfoState('', '', '', '', ''),
    },
    errorMessage: '',
};

const cartReducer = (state: CartState = initialState, action: CartActions): CartState => {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART_SUCCESS: {
            const item = action.payload;
            const isItemExists = _.find(state?.cart?.cartItems, ['product', item.product.id]);
            if (isItemExists) {
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems: _.map(state?.cart?.cartItems, (cartItem: ItemState) =>
                            cartItem.product === isItemExists.product ? item : cartItem,
                        ),
                    },
                };
            }
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: [...state?.cart?.cartItems, item],
                },
            };
        }
        case REMOVE_ITEM_FROM_CART_SUCCESS: {
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: _.reject(
                        state?.cart?.cartItems,
                        (cartItem: ItemState) => cartItem.product !== action.payload,
                    ),
                },
            };
        }
        case SAVE_SHIPPING_INFO: {
            return {
                ...state,
                cart: {
                    ...state.cart,
                    shippingInfo: action.payload,
                },
            };
        }
        case REMOVE_ITEM_FROM_CART_FAIL:
        case ADD_PRODUCT_TO_CART_FAIL: {
            return {
                ...state,
                errorMessage: action.payload.errorMessage,
            };
        }
        case CLEAR_CART_ERRORS: {
            return {
                ...state,
                cart: {
                    cartItems: [],
                    shippingInfo: new ShippingInfoState('', '', '', '', ''),
                },
                errorMessage: '',
            };
        }
        default: {
            return state;
        }
    }
};

export type { CartState };
export default cartReducer;
