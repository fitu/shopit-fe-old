import {
    REQUEST_FORGOT_PASSWORD,
    REQUEST_FORGOT_PASSWORD_FINISHED,
} from '../../actions/auth/actions/forgotPasswordActions';
import {
    REQUEST_RESET_PASSWORD,
    REQUEST_RESET_PASSWORD_FINISHED,
} from '../../actions/auth/actions/resetPasswordActions';
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
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_FORGOT_PASSWORD:
        case REQUEST_RESET_PASSWORD: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_FORGOT_PASSWORD_FINISHED: {
            return {
                ...state,
                loading: false,
            };
        }
        case REQUEST_RESET_PASSWORD_FINISHED: {
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
