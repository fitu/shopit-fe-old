import { addItemToCart as apiAddItemToCart } from '../../api/api';
import { StorageKeys } from '../repository/repository';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
const SAVE_SHIPPING_INFO = 'SAVE_SHIPPING_INFO';
const CLEAR_CART = 'CLEAR_CART';

const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await apiAddItemToCart(id);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            // eslint-disable-next-line no-underscore-dangle
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            images: [
                {
                    public_id: data.product.images[0].public_id,
                    url: data.product.images[0].url,
                },
            ],
            stock: data.product.stock,
            quantity,
        },
    });
    localStorage.setItem(StorageKeys.CART_ITEMS_KEY, JSON.stringify(getState().cart.cartItems));
};

const removeItemFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_ITEM_FROM_CART,
        payload: id,
    });
    localStorage.setItem(StorageKeys.CART_ITEMS_KEY, JSON.stringify(getState().cart.cartItems));
};

const clearCart = () => async (dispatch, getState) => {
    dispatch({
        type: CLEAR_CART,
    });
    localStorage.setItem(StorageKeys.CART_ITEMS_KEY, '');
}

const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({ type: SAVE_SHIPPING_INFO, payload: data });
    localStorage.setItem(StorageKeys.SHIPPING_INFO_KEY, JSON.stringify(data));
};

export {
    ADD_TO_CART,
    REMOVE_ITEM_FROM_CART,
    SAVE_SHIPPING_INFO,
    CLEAR_CART,
    addItemToCart,
    removeItemFromCart,
    saveShippingInfo,
    clearCart,
};
