import { BaseAction } from '../../BaseAction';

const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';

interface ForgotPasswordRequest extends BaseAction {
    type: typeof FORGOT_PASSWORD_REQUEST;
}

interface ForgotPasswordSuccess extends BaseAction {
    type: typeof FORGOT_PASSWORD_SUCCESS;
}

export type { ForgotPasswordRequest, ForgotPasswordSuccess };
export { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS };
