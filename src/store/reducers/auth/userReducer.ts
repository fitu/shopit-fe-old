import { REQUEST_DELETE_USER, REQUEST_DELETE_USER_FINISHED } from '../../actions/auth/actions/deleteUserActions';
import {
    REQUEST_UPDATE_PASSWORD,
    REQUEST_UPDATE_PASSWORD_FINISHED,
} from '../../actions/auth/actions/updatePasswordActions';
import {
    REQUEST_UPDATE_PROFILE,
    REQUEST_UPDATE_PROFILE_FINISHED,
} from '../../actions/auth/actions/updateProfileActions';
import { REQUEST_UPDATE_USER, REQUEST_UPDATE_USER_FINISHED } from '../../actions/auth/actions/updateUserActions';
import { AuthActions } from '../../actions/auth/authActions';

type UserState = {
    loading: boolean;
    isUpdated: boolean;
    isDeleted: boolean;
};

const INITIAL_STATE = {
    loading: false,
    isUpdated: false,
    isDeleted: false,
};

const userReducer = (state: UserState | undefined = INITIAL_STATE, action: AuthActions): UserState => {
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_UPDATE_PROFILE:
        case REQUEST_UPDATE_PASSWORD:
        case REQUEST_UPDATE_USER:
        case REQUEST_DELETE_USER: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_UPDATE_PROFILE_FINISHED:
        case REQUEST_UPDATE_PASSWORD_FINISHED:
        case REQUEST_UPDATE_USER_FINISHED: {
            return {
                ...state,
                loading: false,
                isUpdated: true,
            };
        }
        case REQUEST_DELETE_USER_FINISHED: {
            return {
                ...state,
                loading: false,
                isDeleted: true,
            };
        }
        default: {
            return state;
        }
    }
};

export type { UserState };
export default userReducer;
