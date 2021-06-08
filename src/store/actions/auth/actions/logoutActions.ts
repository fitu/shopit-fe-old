import { Action } from 'redux';

const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'LOGOUT_FAIL';

interface LogoutSuccess extends Action {
    type: typeof LOGOUT_SUCCESS;
}

interface LogoutFail extends Action {
    type: typeof LOGOUT_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { LogoutSuccess, LogoutFail };
export { LOGOUT_SUCCESS, LOGOUT_FAIL };
