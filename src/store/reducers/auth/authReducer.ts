import { REQUEST_LOAD_USER, REQUEST_LOAD_USER_FINISHED } from '../../actions/auth/actions/loadUserActions';
import { REQUEST_LOGIN, REQUEST_LOGIN_FINISHED } from '../../actions/auth/actions/loginActions';
import { REQUEST_LOGOUT_FINISHED } from '../../actions/auth/actions/logoutActions';
import { REQUEST_REGISTER_USER, REQUEST_REGISTER_USER_FINISHED } from '../../actions/auth/actions/registerActions';
import { AuthActions } from '../../actions/auth/authActions';
import User from '../../state/models/User';

type AuthState = {
    loading: boolean;
    isAuthenticated: boolean;
    user: User | undefined;
};

const INITIAL_STATE = {
    loading: false,
    isAuthenticated: false,
    user: undefined,
};

const authReducer = (state: AuthState | undefined = INITIAL_STATE, action: AuthActions): AuthState => {
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_LOGIN:
        case REQUEST_REGISTER_USER:
        case REQUEST_LOAD_USER: {
            return {
                ...state,
                loading: true,
                isAuthenticated: false,
            };
        }
        case REQUEST_LOGIN_FINISHED:
        case REQUEST_REGISTER_USER_FINISHED:
        case REQUEST_LOAD_USER_FINISHED: {
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        }
        case REQUEST_LOGOUT_FINISHED: {
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: undefined,
            };
        }
        default: {
            return state;
        }
    }
};

export type { AuthState };
export default authReducer;
