import { BaseAction } from '../../BaseAction';

import User from '../../../state/models/User';

const GET_USER_DETAILS_REQUEST = 'GET_USER_DETAILS_REQUEST';
const GET_USER_DETAILS_SUCCESS = 'GET_USER_DETAILS_SUCCESS';

interface GetUserDetailsRequest extends BaseAction {
    type: typeof GET_USER_DETAILS_REQUEST;
}

interface GetUserDetailsSuccess extends BaseAction {
    type: typeof GET_USER_DETAILS_SUCCESS;
    payload: User;
}

export type { GetUserDetailsRequest, GetUserDetailsSuccess };
export { GET_USER_DETAILS_REQUEST, GET_USER_DETAILS_SUCCESS };
