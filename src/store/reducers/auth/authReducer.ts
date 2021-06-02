import { AuthActions } from '../../actions/auth/authActions';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../../actions/auth/actions/loginActions';
import { LOGOUT_SUCCESS, LOGOUT_FAIL } from '../../actions/auth/actions/logoutActions';
import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
} from '../../actions/auth/actions/registerActions';
import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL } from '../../actions/auth/actions/loadUserActions';
import { CLEAR_AUTH_ERRORS } from '../../actions/auth/actions/clearAuthErrorsActions';
import UserState from '../../state/models/userState';

type AuthState = {
    loading: boolean;
    isAuthenticated: boolean;
    user: UserState | undefined;
    errorMessage: string;
};

const initialState = {
    loading: false,
    isAuthenticated: false,
    user: undefined,
    errorMessage: '',
};

const authReducer = (state: AuthState | undefined = initialState, action: AuthActions): AuthState => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_USER_REQUEST:
        case LOAD_USER_REQUEST: {
            return {
                ...state,
                loading: true,
                isAuthenticated: false,
            };
        }
        case LOGIN_SUCCESS:
        case REGISTER_USER_SUCCESS:
        case LOAD_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: undefined,
            };
        }
        case LOGOUT_FAIL: {
            return {
                ...state,
                errorMessage: action.payload.errorMessage,
            };
        }
        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:
        case LOAD_USER_FAIL: {
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: undefined,
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

export type { AuthState };
export default authReducer;
