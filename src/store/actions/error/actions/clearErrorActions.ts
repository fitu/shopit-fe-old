import { BaseAction } from '../../BaseAction';

const CLEAR_ERROR = 'CLEAR_ERROR';

interface ClearError extends BaseAction {
    type: typeof CLEAR_ERROR;
}

export type { ClearError };
export { CLEAR_ERROR };
