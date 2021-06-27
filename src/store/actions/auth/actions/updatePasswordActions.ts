import { BaseAction } from '../../BaseAction';

const REQUEST_UPDATE_PASSWORD = 'REQUEST_UPDATE_PASSWORD';
const REQUEST_UPDATE_PASSWORD_FINISHED = 'REQUEST_UPDATE_PASSWORD_FINISHED';

interface RequestUpdatePassword extends BaseAction {
    type: typeof REQUEST_UPDATE_PASSWORD;
}

interface RequestUpdatePasswordFinished extends BaseAction {
    type: typeof REQUEST_UPDATE_PASSWORD_FINISHED;
}

export type { RequestUpdatePassword, RequestUpdatePasswordFinished };
export { REQUEST_UPDATE_PASSWORD, REQUEST_UPDATE_PASSWORD_FINISHED };
