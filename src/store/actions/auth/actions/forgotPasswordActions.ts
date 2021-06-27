import { BaseAction } from '../../BaseAction';

const REQUEST_FORGOT_PASSWORD = 'REQUEST_FORGOT_PASSWORD';
const REQUEST_FORGOT_PASSWORD_FINISHED = 'REQUEST_FORGOT_PASSWORD_FINISHED';

interface RequestForgotPassword extends BaseAction {
    type: typeof REQUEST_FORGOT_PASSWORD;
}

interface RequestForgotPasswordFinished extends BaseAction {
    type: typeof REQUEST_FORGOT_PASSWORD_FINISHED;
}

export type { RequestForgotPassword, RequestForgotPasswordFinished };
export { REQUEST_FORGOT_PASSWORD, REQUEST_FORGOT_PASSWORD_FINISHED };
