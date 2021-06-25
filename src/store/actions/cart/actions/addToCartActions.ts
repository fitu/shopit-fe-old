import { Action } from 'redux';

import Item from '../../../state/models/Item';

const ADD_PRODUCT_TO_CART_SUCCESS = 'ADD_PRODUCT_TO_CART_SUCCESS';
const ADD_PRODUCT_TO_CART_FAIL = 'ADD_PRODUCT_TO_CART_FAIL';

interface AddProductToCartSuccess extends Action {
    type: typeof ADD_PRODUCT_TO_CART_SUCCESS;
    payload: Item;
}

interface AddProductToCartFail extends Action {
    type: typeof ADD_PRODUCT_TO_CART_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { AddProductToCartSuccess, AddProductToCartFail };
export { ADD_PRODUCT_TO_CART_SUCCESS, ADD_PRODUCT_TO_CART_FAIL };
