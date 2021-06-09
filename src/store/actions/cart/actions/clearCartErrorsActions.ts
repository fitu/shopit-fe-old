import { Action } from 'redux';

const CLEAR_CART_ERRORS = 'CLEAR_CART_ERRORS';

interface ClearCartErrors extends Action {
    type: typeof CLEAR_CART_ERRORS;
}

export type { ClearCartErrors };
export { CLEAR_CART_ERRORS };
