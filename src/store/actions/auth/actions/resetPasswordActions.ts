import { BaseAction } from '../../BaseAction';

const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
const RESET_PASSWORD_FAIL = 'RESET_PASSWORD_FAIL';

interface ResetPasswordRequest extends BaseAction {
    type: typeof RESET_PASSWORD_REQUEST;
}

interface ResetPasswordSuccess extends BaseAction {
    type: typeof RESET_PASSWORD_SUCCESS;
}

interface ResetPasswordFail extends BaseAction {
    type: typeof RESET_PASSWORD_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { ResetPasswordRequest, ResetPasswordSuccess, ResetPasswordFail };
export { RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL };
