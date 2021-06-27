import {
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_RESET,
} from '../../actions/auth/actions/deleteUserActions';
import {
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
} from '../../actions/auth/actions/updatePasswordActions';
import {
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
} from '../../actions/auth/actions/updateProfileActions';
import {
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_RESET,
} from '../../actions/auth/actions/updateUserActions';
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
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
        case UPDATE_PASSWORD_REQUEST:
        case UPDATE_USER_REQUEST:
        case DELETE_USER_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case UPDATE_PROFILE_SUCCESS:
        case UPDATE_PASSWORD_SUCCESS:
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                isUpdated: true,
            };
        }
        case DELETE_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                isDeleted: true,
            };
        }
        case UPDATE_PROFILE_RESET:
        case UPDATE_PASSWORD_RESET:
        case UPDATE_USER_RESET: {
            return {
                ...state,
                isUpdated: false,
            };
        }
        case DELETE_USER_RESET: {
            return {
                ...state,
                isDeleted: false,
            };
        }
        default: {
            return state;
        }
    }
};

export type { UserState };
export default userReducer;
