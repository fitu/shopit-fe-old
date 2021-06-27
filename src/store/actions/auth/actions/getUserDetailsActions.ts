import { BaseAction } from '../../BaseAction';

import User from '../../../state/models/User';

const GET_USER_DETAILS_REQUEST = 'GET_USER_DETAILS_REQUEST';
const GET_USER_DETAILS_SUCCESS = 'GET_USER_DETAILS_SUCCESS';
const GET_USER_DETAILS_FAIL = 'GET_USER_DETAILS_FAIL';

interface GetUserDetailsRequest extends BaseAction {
    type: typeof GET_USER_DETAILS_REQUEST;
}

interface GetUserDetailsSuccess extends BaseAction {
    type: typeof GET_USER_DETAILS_SUCCESS;
    payload: User;
}

interface GetUserDetailsFail extends BaseAction {
    type: typeof GET_USER_DETAILS_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { GetUserDetailsRequest, GetUserDetailsSuccess, GetUserDetailsFail };
export { GET_USER_DETAILS_REQUEST, GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_FAIL };
