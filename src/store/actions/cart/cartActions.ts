/* eslint-disable indent */
import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { addItemToCart as apiAddItemToCart } from '../../../api/api';
import ItemApi from '../../../api/models/itemApi';
import { setCartItems, setShippingInfo } from '../../../storage/storage';
import ShippingInfo from '../../state/models/ShippingInfo';
import { StoreState } from '../../state/storeState';

// TODO: check if this is REQUEST_*_FINISHED
import { RequestAddProductToCartFinished, REQUEST_ADD_PRODUCT_TO_CART_FINISHED } from './actions/addToCartActions';
import {
    RequestRemoveItemFromCartFinished,
    REQUEST_REMOVE_ITEM_FROM_CART_FINISHED,
} from './actions/removeItemFromCartActions';
import { RequestSaveShippingInfo, REQUEST_SAVE_SHIPPING_INFO_FINISHED } from './actions/saveShippingInfoActions';

type AddToCartActions = RequestAddProductToCartFinished;
type RemoveItemFromCartActions = RequestRemoveItemFromCartFinished;

type CartActions = AddToCartActions | RemoveItemFromCartActions | RequestSaveShippingInfo;

const addItemToCart: ActionCreator<ThunkAction<Promise<void>, StoreState, void, AddToCartActions>> =
    (productId: string, quantity: number) =>
    async (dispatch: ThunkDispatch<StoreState, void, AddToCartActions>, getState: () => StoreState) => {
        try {
            const apiProduct = await apiAddItemToCart(productId, quantity);
            setCartItems(getState()?.cart?.cart?.cartItems ?? []);
            dispatch({
                type: REQUEST_ADD_PRODUCT_TO_CART_FINISHED,
                payload: ItemApi.toState(apiProduct.item),
            });
        } catch (error) {
            dispatch({
                type: REQUEST_ADD_PRODUCT_TO_CART_FINISHED,
                error: { message: error.message },
                isError: true,
            });
        }
    };

const removeItemFromCart: ActionCreator<ThunkAction<Promise<void>, StoreState, void, RemoveItemFromCartActions>> =
    (id: string) =>
    async (dispatch: ThunkDispatch<StoreState, void, RemoveItemFromCartActions>, getState: () => StoreState) => {
        try {
            setCartItems(getState()?.cart?.cart.cartItems ?? []);
            dispatch({
                type: REQUEST_REMOVE_ITEM_FROM_CART_FINISHED,
                payload: { id },
            });
        } catch (error) {
            dispatch({
                type: REQUEST_REMOVE_ITEM_FROM_CART_FINISHED,
                error: { message: error.message },
                isError: true,
            });
        }
    };

const saveShippingInfo: ActionCreator<ThunkAction<Promise<void>, StoreState, void, RequestSaveShippingInfo>> =
    (shippingInfo: ShippingInfo) => async (dispatch: ThunkDispatch<StoreState, void, RequestSaveShippingInfo>) => {
        setShippingInfo(shippingInfo);
        dispatch({ type: REQUEST_SAVE_SHIPPING_INFO_FINISHED, payload: shippingInfo });
    };

export type { CartActions };
export { addItemToCart, removeItemFromCart, saveShippingInfo };
