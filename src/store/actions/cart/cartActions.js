import { addItemToCart as apiAddItemToCart } from '../../../api/api';
import { StorageKeys } from '../../repository/repository';

import { ADD_TO_CART } from './models/addToCartAction';
import { CLEAR_CART } from './models/clearCart';
import { REMOVE_ITEM_FROM_CART } from './models/removeItemFromCart';
import { SAVE_SHIPPING_INFO } from './models/saveShippingInfo';

const addItemToCart = (productId, quantity) => async (dispatch, getState) => {
    const product = await apiAddItemToCart(productId);

    // FIXME: the payload should create a new Item
    dispatch({
        type: ADD_TO_CART,
        payload: {
            // eslint-disable-next-line no-underscore-dangle
            productId: product._id,
            name: product.name,
            price: product.price,
            images: [
                {
                    public_id: product.images[0].public_id,
                    url: product.images[0].url,
                },
            ],
            stock: product.stock,
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

const clearCart = () => async (dispatch) => {
    dispatch({ type: CLEAR_CART });
    localStorage.setItem(StorageKeys.CART_ITEMS_KEY, '');
};

const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({ type: SAVE_SHIPPING_INFO, payload: data });
    localStorage.setItem(StorageKeys.SHIPPING_INFO_KEY, JSON.stringify(data));
};

export { addItemToCart, removeItemFromCart, saveShippingInfo, clearCart };
