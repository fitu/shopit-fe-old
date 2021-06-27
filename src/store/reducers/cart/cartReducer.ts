import _ from 'lodash';

import { REQUEST_ADD_PRODUCT_TO_CART_FINISHED } from '../../actions/cart/actions/addToCartActions';
import { REQUEST_REMOVE_ITEM_FROM_CART_FINISHED } from '../../actions/cart/actions/removeItemFromCartActions';
import { REQUEST_SAVE_SHIPPING_INFO_FINISHED } from '../../actions/cart/actions/saveShippingInfoActions';
import { CartActions } from '../../actions/cart/cartActions';
import Cart from '../../state/models/Cart';
import Item from '../../state/models/Item';
import ShippingInfo from '../../state/models/ShippingInfo';

type CartState = {
    cart: Cart;
};

const INITIAL_STATE = {
    cart: {
        cartItems: [],
        shippingInfo: new ShippingInfo('', '', '', '', ''),
    },
};

const cartReducer = (state: CartState = INITIAL_STATE, action: CartActions): CartState => {
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_ADD_PRODUCT_TO_CART_FINISHED: {
            const item = action.payload!!;
            const isItemExists = _.find(state?.cart?.cartItems, ['product', item?.product.id]);
            if (isItemExists) {
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        cartItems: _.map(state?.cart?.cartItems, (cartItem: Item) =>
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
        case REQUEST_REMOVE_ITEM_FROM_CART_FINISHED: {
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: _.reject(
                        state?.cart?.cartItems,
                        (cartItem: Item) => cartItem.product !== action.payload,
                    ),
                },
            };
        }
        case REQUEST_SAVE_SHIPPING_INFO_FINISHED: {
            return {
                ...state,
                cart: {
                    ...state.cart,
                    shippingInfo: action.payload,
                },
            };
        }
        default: {
            return state;
        }
    }
};

export type { CartState };
export default cartReducer;
