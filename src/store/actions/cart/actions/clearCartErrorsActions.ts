import { BaseAction } from '../../BaseAction';

const CLEAR_CART_ERRORS = 'CLEAR_CART_ERRORS';

interface ClearCartErrors extends BaseAction {
    type: typeof CLEAR_CART_ERRORS;
}

export type { ClearCartErrors };
export { CLEAR_CART_ERRORS };
