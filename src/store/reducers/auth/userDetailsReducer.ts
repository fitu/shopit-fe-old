import { GET_USER_DETAILS_REQUEST, GET_USER_DETAILS_SUCCESS } from '../../actions/auth/actions/getUserDetailsActions';
import { AuthActions } from '../../actions/auth/authActions';
import User from '../../state/models/User';

type UserDetailsState = {
    loading: boolean;
    user: User | undefined;
};

const INITIAL_STATE = {
    loading: false,
    user: undefined,
};

const userDetailsReducer = (
    state: UserDetailsState | undefined = INITIAL_STATE,
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
        default: {
            return state;
        }
    }
};

export type { UserDetailsState };
export default userDetailsReducer;
