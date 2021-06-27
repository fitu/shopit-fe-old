import { BaseAction } from '../../BaseAction';

const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
const FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';

interface ForgotPasswordRequest extends BaseAction {
    type: typeof FORGOT_PASSWORD_REQUEST;
}

interface ForgotPasswordSuccess extends BaseAction {
    type: typeof FORGOT_PASSWORD_SUCCESS;
}

interface ForgotPasswordFail extends BaseAction {
    type: typeof FORGOT_PASSWORD_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { ForgotPasswordRequest, ForgotPasswordSuccess, ForgotPasswordFail };
export { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL };
