import { Action } from 'redux';
import UserState from '../../../state/models/userState';

const GET_USER_DETAILS_REQUEST = 'GET_USER_DETAILS_REQUEST';
const GET_USER_DETAILS_SUCCESS = 'GET_USER_DETAILS_SUCCESS';
const GET_USER_DETAILS_FAIL = 'GET_USER_DETAILS_FAIL';

interface GetUserDetailsRequest extends Action {
    type: typeof GET_USER_DETAILS_REQUEST;
}

interface GetUserDetailsSuccess extends Action {
    type: typeof GET_USER_DETAILS_SUCCESS;
    payload: UserState;
}

interface GetUserDetailsFail extends Action {
    type: typeof GET_USER_DETAILS_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { GetUserDetailsRequest, GetUserDetailsSuccess, GetUserDetailsFail };
export { GET_USER_DETAILS_REQUEST, GET_USER_DETAILS_SUCCESS, GET_USER_DETAILS_FAIL };
