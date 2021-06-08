import { AuthActions } from '../../actions/auth/authActions';
import {
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_RESET,
    UPDATE_USER_FAIL,
} from '../../actions/auth/actions/updateUserActions';
import {
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_FAIL,
} from '../../actions/auth/actions/updatePasswordActions';
import {
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL,
} from '../../actions/auth/actions/updateProfileActions';
import {
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_RESET,
    DELETE_USER_FAIL,
} from '../../actions/auth/actions/deleteUserActions';
import { CLEAR_AUTH_ERRORS } from '../../actions/auth/actions/clearAuthErrorsActions';

type UserState = {
    loading: boolean;
    isUpdated: boolean;
    isDeleted: boolean;
    errorMessage: string;
};

const initialState = {
    loading: false,
    isUpdated: false,
    isDeleted: false,
    errorMessage: '',
};

const userReducer = (state: UserState | undefined = initialState, action: AuthActions): UserState => {
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
        case UPDATE_PROFILE_FAIL:
        case UPDATE_PASSWORD_FAIL:
        case UPDATE_USER_FAIL:
        case DELETE_USER_FAIL: {
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.errorMessage,
            };
        }
        case CLEAR_AUTH_ERRORS: {
            return {
                ...state,
                errorMessage: '',
            };
        }
        default: {
            return state;
        }
    }
};

export type { UserState };
export default userReducer;
