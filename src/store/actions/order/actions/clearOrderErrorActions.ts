import { Action } from 'redux';

const CLEAR_ORDER_ERRORS = 'CLEAR_ORDER_ERRORS';

interface ClearOrderErrors extends Action {
    type: typeof CLEAR_ORDER_ERRORS;
}

export type { ClearOrderErrors };
export { CLEAR_ORDER_ERRORS };
