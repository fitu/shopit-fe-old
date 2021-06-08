import { CLEAR_AUTH_ERRORS } from '../../actions/auth/actions/clearAuthErrorsActions';
import {
    GET_ALL_USER_REQUEST,
    GET_ALL_USER_SUCCESS,
    GET_ALL_USER_FAIL,
} from '../../actions/auth/actions/getAllUsersActions';
import { AuthActions } from '../../actions/auth/authActions';
import UserState from '../../state/models/userState';

type AllUsersState = {
    loading: boolean;
    users: Array<UserState>;
    errorMessage: string;
};

const initialState = {
    loading: false,
    users: [],
    errorMessage: '',
};

const allUsersReducer = (state: AllUsersState | undefined = initialState, action: AuthActions): AllUsersState => {
    switch (action.type) {
        case GET_ALL_USER_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_ALL_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                users: action.payload,
            };
        }
        case GET_ALL_USER_FAIL: {
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

export type { AllUsersState };
export default allUsersReducer;
