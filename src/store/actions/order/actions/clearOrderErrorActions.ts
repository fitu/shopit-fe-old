import { BaseAction } from '../../BaseAction';

const CLEAR_ORDER_ERRORS = 'CLEAR_ORDER_ERRORS';

interface ClearOrderErrors extends BaseAction {
    type: typeof CLEAR_ORDER_ERRORS;
}

export type { ClearOrderErrors };
export { CLEAR_ORDER_ERRORS };
