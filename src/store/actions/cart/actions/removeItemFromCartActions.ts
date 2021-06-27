import { BaseAction } from '../../BaseAction';

const REMOVE_ITEM_FROM_CART_SUCCESS = 'REMOVE_ITEM_FROM_CART_SUCCESS';
const REMOVE_ITEM_FROM_CART_FAIL = 'REMOVE_ITEM_FROM_CART_FAIL';

interface RemoveItemFromCartSuccess extends BaseAction {
    type: typeof REMOVE_ITEM_FROM_CART_SUCCESS;
    payload: {
        id: string;
    };
}

interface RemoveItemFromCartFail extends BaseAction {
    type: typeof REMOVE_ITEM_FROM_CART_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { RemoveItemFromCartSuccess, RemoveItemFromCartFail };
export { REMOVE_ITEM_FROM_CART_SUCCESS, REMOVE_ITEM_FROM_CART_FAIL };
