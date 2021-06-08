import { Action } from 'redux';

const CLEAR_PRODUCT_ERRORS = 'CLEAR_PRODUCT_ERRORS';

interface ClearProductErrors extends Action {
    type: typeof CLEAR_PRODUCT_ERRORS;
}

export type { ClearProductErrors };
export { CLEAR_PRODUCT_ERRORS };