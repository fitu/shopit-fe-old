import { Action } from 'redux';

const CLEAR_AUTH_ERRORS = 'CLEAR_AUTH_ERRORS';

interface ClearAuthErrors extends Action {
    type: typeof CLEAR_AUTH_ERRORS;
}

export type { ClearAuthErrors };
export { CLEAR_AUTH_ERRORS };
