import { BaseAction } from '../../BaseAction';

const ADD_ERROR = 'ADD_ERROR';

interface AddError extends BaseAction {
    type: typeof ADD_ERROR;
    payload: {
        error: string;
    };
}

export type { AddError };
export { ADD_ERROR };
