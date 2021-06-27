import { BaseAction } from '../../BaseAction';

const REQUEST_UPDATE_USER = 'REQUEST_UPDATE_USER';
const REQUEST_UPDATE_USER_FINISHED = 'REQUEST_UPDATE_USER_FINISHED';

interface RequestUpdateUser extends BaseAction {
    type: typeof REQUEST_UPDATE_USER;
}

interface RequestUpdateUserFinished extends BaseAction {
    type: typeof REQUEST_UPDATE_USER_FINISHED;
}

export type { RequestUpdateUser, RequestUpdateUserFinished };
export { REQUEST_UPDATE_USER, REQUEST_UPDATE_USER_FINISHED };
