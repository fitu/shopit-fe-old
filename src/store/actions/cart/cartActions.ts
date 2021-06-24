/* eslint-disable indent */
import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { addItemToCart as apiAddItemToCart } from '../../../api/api';
import ItemApi from '../../../api/models/itemApi';
import { setCartItems, setShippingInfo } from '../../repository/repository';
import ShippingInfoState from '../../state/models/shippingInfoState';
import { StoreState } from '../../state/storeState';

import {
    AddProductToCartSuccess,
    AddProductToCartFail,
    ADD_PRODUCT_TO_CART_SUCCESS,
    ADD_PRODUCT_TO_CART_FAIL,
} from './actions/addToCartActions';
import { ClearCartErrors, CLEAR_CART_ERRORS } from './actions/clearCartErrorsActions';
import {
    RemoveItemFromCartSuccess,
    RemoveItemFromCartFail,
    REMOVE_ITEM_FROM_CART_SUCCESS,
    REMOVE_ITEM_FROM_CART_FAIL,
} from './actions/removeItemFromCartActions';
import { SaveShippingInfo, SAVE_SHIPPING_INFO } from './actions/saveShippingInfoActions';

type AddToCartActions = AddProductToCartSuccess | AddProductToCartFail;
type RemoveItemFromCartActions = RemoveItemFromCartSuccess | RemoveItemFromCartFail;
type CartActions = AddToCartActions | ClearCartErrors | RemoveItemFromCartActions | SaveShippingInfo;

const addItemToCart: ActionCreator<ThunkAction<Promise<void>, StoreState, void, AddToCartActions>> =
    (productId: string, quantity: number) =>
    async (dispatch: ThunkDispatch<StoreState, void, AddToCartActions>, getState: () => StoreState) => {
        try {
            const apiProduct = await apiAddItemToCart(productId, quantity);
            setCartItems(getState()?.cart?.cart?.cartItems ?? []);
            dispatch({
                type: ADD_PRODUCT_TO_CART_SUCCESS,
                payload: ItemApi.toState(apiProduct.item),
            });
        } catch (error) {
            dispatch({ type: ADD_PRODUCT_TO_CART_FAIL, payload: { errorMessage: error.message } });
        }
    };

const removeItemFromCart: ActionCreator<ThunkAction<Promise<void>, StoreState, void, RemoveItemFromCartActions>> =
    (id: string) =>
    async (dispatch: ThunkDispatch<StoreState, void, RemoveItemFromCartActions>, getState: () => StoreState) => {
        try {
            setCartItems(getState()?.cart?.cart.cartItems ?? []);
            dispatch({
                type: REMOVE_ITEM_FROM_CART_SUCCESS,
                payload: { id },
            });
        } catch (error) {
            dispatch({ type: REMOVE_ITEM_FROM_CART_FAIL, payload: { errorMessage: error.message } });
        }
    };

const clearCart: ActionCreator<ThunkAction<Promise<void>, StoreState, void, ClearCartErrors>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, ClearCartErrors>) => {
        setCartItems([]);
        dispatch({ type: CLEAR_CART_ERRORS });
    };

const saveShippingInfo: ActionCreator<ThunkAction<Promise<void>, StoreState, void, SaveShippingInfo>> =
    (shippingInfo: ShippingInfoState) => async (dispatch: ThunkDispatch<StoreState, void, SaveShippingInfo>) => {
        setShippingInfo(shippingInfo);
        dispatch({ type: SAVE_SHIPPING_INFO, payload: shippingInfo });
    };

export type { CartActions };
export { addItemToCart, removeItemFromCart, saveShippingInfo, clearCart };
