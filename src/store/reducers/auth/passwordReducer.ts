import { CLEAR_AUTH_ERRORS } from '../../actions/auth/actions/clearAuthErrorsActions';
import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
} from '../../actions/auth/actions/forgotPasswordActions';
import {
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
} from '../../actions/auth/actions/resetPasswordActions';
import { AuthActions } from '../../actions/auth/authActions';

type PasswordState = {
    loading: boolean;
    message: string;
    success: boolean;
    errorMessage: string;
};

const initialState = {
    loading: false,
    message: '',
    success: false,
    errorMessage: '',
};

const passwordReducer = (state: PasswordState | undefined = initialState, action: AuthActions): PasswordState => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
        case RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                loading: false,
            };
        }
        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                success: true,
            };
        }
        case FORGOT_PASSWORD_FAIL:
        case RESET_PASSWORD_FAIL: {
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

export type { PasswordState };
export default passwordReducer;
