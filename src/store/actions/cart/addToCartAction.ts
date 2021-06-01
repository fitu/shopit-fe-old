import { Action } from 'redux';

import ItemState from '../../state/itemState';

const ADD_TO_CART = 'ADD_TO_CART';

interface AddToCart extends Action {
    type: typeof ADD_TO_CART;
    payload: ItemState;
}

export type { AddToCart };
export { ADD_TO_CART };
