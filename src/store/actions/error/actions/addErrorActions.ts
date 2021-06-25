import { Action } from 'redux';

const ADD_ERROR = 'ADD_ERROR';

interface AddError extends Action {
    type: typeof ADD_ERROR;
    payload: {
        error: string;
    };
}

export type { AddError };
export { ADD_ERROR };
