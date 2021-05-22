import _ from 'lodash';

import { ADD_TO_CART, REMOVE_ITEM_FROM_CART, SAVE_SHIPPING_INFO, CLEAR_CART } from '../actions/cartActions';

const initialCartState = {
    cartItems: [],
    shippingInfo: {},
};
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const item = action.payload;
            const isItemExists = _.find(state.cartItems, ['product', item.product]);
            if (isItemExists) {
                return {
                    ...state,
                    cartItems: _.map(state.cartItems, (index) =>
                        index.product === isItemExists.product ? item : index,
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
                cartItems: _.reject(state.cartItems, (index) => index.product !== action.payload),
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
