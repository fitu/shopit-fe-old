import { BaseAction } from '../../BaseAction';

const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';

interface ResetPasswordRequest extends BaseAction {
    type: typeof RESET_PASSWORD_REQUEST;
}

interface ResetPasswordSuccess extends BaseAction {
    type: typeof RESET_PASSWORD_SUCCESS;
}

export type { ResetPasswordRequest, ResetPasswordSuccess };
export { RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS };
