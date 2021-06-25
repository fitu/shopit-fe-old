import { Action } from 'redux';

const REMOVE_ERROR = 'REMOVE_ERROR';

interface RemoveError extends Action {
    type: typeof REMOVE_ERROR;
}

export type { RemoveError };
export { REMOVE_ERROR };
