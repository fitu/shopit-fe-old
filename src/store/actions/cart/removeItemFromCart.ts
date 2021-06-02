import { Action } from 'redux';

const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

interface RemoveItemFromCart extends Action {
    type: typeof REMOVE_ITEM_FROM_CART;
    payload: {
        id: string;
    };
}

export type { RemoveItemFromCart };
export { REMOVE_ITEM_FROM_CART };
