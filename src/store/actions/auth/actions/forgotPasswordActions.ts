import { Action } from 'redux';

const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
const FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';

interface ForgotPasswordRequest extends Action {
    type: typeof FORGOT_PASSWORD_REQUEST;
}

interface ForgotPasswordSuccess extends Action {
    type: typeof FORGOT_PASSWORD_SUCCESS;
}

interface ForgotPasswordFail extends Action {
    type: typeof FORGOT_PASSWORD_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { ForgotPasswordRequest, ForgotPasswordSuccess, ForgotPasswordFail };
export { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL };
