import { REQUEST_GET_ALL_USER, REQUEST_GET_ALL_USER_FINISHED } from '../../actions/auth/actions/getAllUsersActions';
import { AuthActions } from '../../actions/auth/authActions';
import User from '../../state/models/User';

type AllUsersState = {
    loading: boolean;
    users?: Array<User>;
};

const INITIAL_STATE = {
    loading: false,
    users: [],
};

const allUsersReducer = (state: AllUsersState | undefined = INITIAL_STATE, action: AuthActions): AllUsersState => {
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_GET_ALL_USER: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_GET_ALL_USER_FINISHED: {
            return {
                ...state,
                loading: false,
                users: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export type { AllUsersState };
export default allUsersReducer;
