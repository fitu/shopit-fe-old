import { BaseAction } from '../../BaseAction';

const REQUEST_LOGOUT_FINISHED = 'REQUEST_LOGOUT_FINISHED';

interface RequestLogoutFinished extends BaseAction {
    type: typeof REQUEST_LOGOUT_FINISHED;
}

export type { RequestLogoutFinished };
export { REQUEST_LOGOUT_FINISHED };
