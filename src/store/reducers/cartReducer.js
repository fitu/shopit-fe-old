import { ADD_TO_CART, REMOVE_ITEM_FROM_CART, SAVE_SHIPPING_INFO } from '../actions/cartActions';

const initialCartState = {
    cartItems: [],
    shippingInfo: {},
};
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const item = action.payload;
            const isItemExists = state.cartItems.find((index) => index.product === item.product);
            if (isItemExists) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((index) => (index.product === isItemExists.product ? item : index)),
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
                cartItems: state.cartItems.filter((index) => index.product !== action.payload),
            };
        }
        case SAVE_SHIPPING_INFO: {
            return {
                ...state,
                shippingInfo: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export { cartReducer };
