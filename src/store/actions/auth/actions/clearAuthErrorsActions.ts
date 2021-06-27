import { BaseAction } from '../../BaseAction';

const CLEAR_AUTH_ERRORS = 'CLEAR_AUTH_ERRORS';

interface ClearAuthErrors extends BaseAction {
    type: typeof CLEAR_AUTH_ERRORS;
}

export type { ClearAuthErrors };
export { CLEAR_AUTH_ERRORS };
