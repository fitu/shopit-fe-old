import { CLEAR_AUTH_ERRORS } from '../../actions/auth/actions/clearAuthErrorsActions';
import {
    GET_USER_DETAILS_REQUEST,
    GET_USER_DETAILS_SUCCESS,
    GET_USER_DETAILS_FAIL,
} from '../../actions/auth/actions/getUserDetailsActions';
import { AuthActions } from '../../actions/auth/authActions';
import UserState from '../../state/models/userState';

type UserDetailsState = {
    loading: boolean;
    user: UserState | undefined;
    errorMessage: string;
};

const initialState = {
    loading: false,
    user: undefined,
    errorMessage: '',
};

const userDetailsReducer = (
    state: UserDetailsState | undefined = initialState,
    action: AuthActions,
): UserDetailsState => {
    switch (action.type) {
        case GET_USER_DETAILS_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_USER_DETAILS_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        }
        case GET_USER_DETAILS_FAIL: {
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

export type { UserDetailsState };
export default userDetailsReducer;
