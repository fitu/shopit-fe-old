import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS } from '../../actions/auth/actions/loadUserActions';
import { LOGIN_REQUEST, LOGIN_SUCCESS } from '../../actions/auth/actions/loginActions';
import { LOGOUT_SUCCESS } from '../../actions/auth/actions/logoutActions';
import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from '../../actions/auth/actions/registerActions';
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
        default: {
            return state;
        }
    }
};

export type { AuthState };
export default authReducer;
