import { GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS } from '../../actions/auth/actions/getAllUsersActions';
import { AuthActions } from '../../actions/auth/authActions';
import User from '../../state/models/User';

type AllUsersState = {
    loading: boolean;
    users: Array<User>;
};

const INITIAL_STATE = {
    loading: false,
    users: [],
};

const allUsersReducer = (state: AllUsersState | undefined = INITIAL_STATE, action: AuthActions): AllUsersState => {
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
        default: {
            return state;
        }
    }
};

export type { AllUsersState };
export default allUsersReducer;
