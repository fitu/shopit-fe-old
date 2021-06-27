import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS } from '../../actions/auth/actions/forgotPasswordActions';
import { RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS } from '../../actions/auth/actions/resetPasswordActions';
import { AuthActions } from '../../actions/auth/authActions';

type PasswordState = {
    loading: boolean;
    message: string;
    success: boolean;
};

const INITIAL_STATE = {
    loading: false,
    message: '',
    success: false,
};

const passwordReducer = (state: PasswordState | undefined = INITIAL_STATE, action: AuthActions): PasswordState => {
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
        default: {
            return state;
        }
    }
};

export type { PasswordState };
export default passwordReducer;
