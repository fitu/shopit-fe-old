import { Action } from 'redux';

const CLEAR_CART = 'CLEAR_CART';

interface ClearCart extends Action {
    type: typeof CLEAR_CART;
}

export type { ClearCart };
export { CLEAR_CART };
