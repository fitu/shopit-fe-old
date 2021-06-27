/* eslint-disable indent */
import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { addItemToCart as apiAddItemToCart } from '../../../api/api';
import ItemApi from '../../../api/models/itemApi';
import { setCartItems, setShippingInfo } from '../../../storage/storage';
import ShippingInfo from '../../state/models/ShippingInfo';
import { StoreState } from '../../state/storeState';

import { AddProductToCartSuccess, ADD_PRODUCT_TO_CART_SUCCESS } from './actions/addToCartActions';
import { RemoveItemFromCartSuccess, REMOVE_ITEM_FROM_CART_SUCCESS } from './actions/removeItemFromCartActions';
import { SaveShippingInfo, SAVE_SHIPPING_INFO } from './actions/saveShippingInfoActions';
import { ADD_ERROR, AddError as AddErrorActions } from '../error/actions/addErrorActions';

type AddToCartActions = AddProductToCartSuccess | AddErrorActions;
type RemoveItemFromCartActions = RemoveItemFromCartSuccess | AddErrorActions;

type CartActions = AddToCartActions | RemoveItemFromCartActions | SaveShippingInfo;

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
            dispatch({ type: ADD_ERROR, payload: { error: error.message } });
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
            dispatch({ type: ADD_ERROR, payload: { error: error.message } });
        }
    };

const saveShippingInfo: ActionCreator<ThunkAction<Promise<void>, StoreState, void, SaveShippingInfo>> =
    (shippingInfo: ShippingInfo) => async (dispatch: ThunkDispatch<StoreState, void, SaveShippingInfo>) => {
        setShippingInfo(shippingInfo);
        dispatch({ type: SAVE_SHIPPING_INFO, payload: shippingInfo });
    };

export type { CartActions };
export { addItemToCart, removeItemFromCart, saveShippingInfo };
