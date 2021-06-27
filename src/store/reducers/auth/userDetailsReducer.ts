import {
    REQUEST_GET_USER_DETAILS,
    REQUEST_GET_USER_DETAILS_FINISHED,
} from '../../actions/auth/actions/getUserDetailsActions';
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
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_GET_USER_DETAILS: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_GET_USER_DETAILS_FINISHED: {
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
