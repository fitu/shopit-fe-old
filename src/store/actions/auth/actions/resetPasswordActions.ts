import { BaseAction } from '../../BaseAction';

const REQUEST_RESET_PASSWORD = 'REQUEST_RESET_PASSWORD';
const REQUEST_RESET_PASSWORD_FINISHED = 'REQUEST_RESET_PASSWORD_FINISHED';

interface RequestResetPassword extends BaseAction {
    type: typeof REQUEST_RESET_PASSWORD;
}

interface RequestResetPasswordFinished extends BaseAction {
    type: typeof REQUEST_RESET_PASSWORD_FINISHED;
}

export type { RequestResetPassword, RequestResetPasswordFinished };
export { REQUEST_RESET_PASSWORD, REQUEST_RESET_PASSWORD_FINISHED };
