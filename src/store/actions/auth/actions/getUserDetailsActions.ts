import { BaseAction } from '../../BaseAction';

import User from '../../../state/models/User';

const REQUEST_GET_USER_DETAILS = 'REQUEST_GET_USER_DETAILS';
const REQUEST_GET_USER_DETAILS_FINISHED = 'REQUEST_GET_USER_DETAILS_FINISHED';

interface RequestGetUserDetails extends BaseAction {
    type: typeof REQUEST_GET_USER_DETAILS;
}

interface RequestGetUserDetailsFinished extends BaseAction {
    type: typeof REQUEST_GET_USER_DETAILS_FINISHED;
    payload?: User;
}

export type { RequestGetUserDetails, RequestGetUserDetailsFinished };
export { REQUEST_GET_USER_DETAILS, REQUEST_GET_USER_DETAILS_FINISHED };
