import { Action, ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { addItemToCart as apiAddItemToCart } from '../../../api/api';
import ShippingInfo from '../../../models/shippingInfo';
import { StorageKeys } from '../../repository/repository';
import ItemState from '../../state/itemState';
import ShippingInfoState from '../../state/shippingInfoState';
import StoreState from '../../state/storeState';

import { AddToCart, ADD_TO_CART } from './addToCartAction';
import { ClearCart, CLEAR_CART } from './clearCartAction';
import { RemoveItemFromCart, REMOVE_ITEM_FROM_CART } from './removeItemFromCart';
import { SaveShippingInfo, SAVE_SHIPPING_INFO } from './saveShippingInfoAction';

type CartActions = AddToCart | ClearCart | RemoveItemFromCart | SaveShippingInfo;

const addItemToCart: ActionCreator<ThunkAction<Promise<Action>, StoreState, void, CartActions>> =
    (productId: string, quantity: number) =>
    async (dispatch: ThunkDispatch<StoreState, void, CartActions>, getState: () => StoreState) => {
        const apiProduct = await apiAddItemToCart(productId);
        localStorage.setItem(StorageKeys.CART_ITEMS_KEY, JSON.stringify(getState().cart.cartItems));

        return dispatch({
            type: ADD_TO_CART,
            payload: ItemState.fromApiToState(apiProduct, quantity),
        });
    };

const removeItemFromCart: ActionCreator<ThunkAction<Promise<Action>, StoreState, void, CartActions>> =
    (id: string) => async (dispatch: ThunkDispatch<StoreState, void, CartActions>, getState: () => StoreState) => {
        localStorage.setItem(StorageKeys.CART_ITEMS_KEY, JSON.stringify(getState().cart.cartItems));
        return dispatch({
            type: REMOVE_ITEM_FROM_CART,
            payload: {
                id,
            },
        });
    };

const clearCart: ActionCreator<ThunkAction<Promise<Action>, StoreState, void, CartActions>> =
    () => async (dispatch) => {
        localStorage.setItem(StorageKeys.CART_ITEMS_KEY, '');
        return dispatch({ type: CLEAR_CART });
    };

const saveShippingInfo: ActionCreator<ThunkAction<Promise<Action>, StoreState, void, CartActions>> =
    (shippingInfo: ShippingInfo) => async (dispatch) => {
        localStorage.setItem(StorageKeys.SHIPPING_INFO_KEY, JSON.stringify(shippingInfo));
        return dispatch({ type: SAVE_SHIPPING_INFO, payload: ShippingInfoState.fromModelToState(shippingInfo) });
    };

export type { CartActions };
export { addItemToCart, removeItemFromCart, saveShippingInfo, clearCart };
