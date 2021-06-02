import {
    ALL_USER_FAIL,
    ALL_USER_REQUEST,
    ALL_USER_SUCCESS,
    CLEAR_ERRORS,
    DELETE_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_RESET,
    DELETE_USER_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    LOAD_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOGIN_FAIL,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    NEW_PASSWORD_FAIL,
    NEW_PASSWORD_REQUEST,
    NEW_PASSWORD_SUCCESS,
    REGISTER_USER_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_RESET,
    UPDATE_USER_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
} from '../actions/authActions';

const initialAuthState = {
    loading: false,
    isAuthenticated: false,
    user: {},
    error: undefined,
};
const authReducer = (state = initialAuthState, action) => {
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
        case LOGOUT_FAIL: {
            return {
                ...state,
                error: action.payload,
            };
        }
        case LOGIN_FAIL:
        case REGISTER_USER_FAIL:
        case LOAD_USER_FAIL: {
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: undefined,
                error: action.payload,
            };
        }
        case CLEAR_ERRORS: {
            return {
                ...state,
                error: undefined,
            };
        }
        default: {
            return state;
        }
    }
};

const initialUserState = {
    loading: false,
    isUpdated: false,
    isDeleted: false,
    error: undefined,
};
const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case UPDATE_PROFILE_REQUEST:
        case UPDATE_PASSWORD_REQUEST:
        case UPDATE_USER_REQUEST:
        case DELETE_USER_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case UPDATE_PROFILE_SUCCESS:
        case UPDATE_PASSWORD_SUCCESS:
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        }
        case DELETE_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                isDeleted: false,
            };
        }
        case UPDATE_PROFILE_RESET:
        case UPDATE_PASSWORD_RESET:
        case UPDATE_USER_RESET: {
            return {
                ...state,
                isUpdated: false,
            };
        }
        case DELETE_USER_RESET: {
            return {
                ...state,
                isDeleted: false,
            };
        }
        case UPDATE_PROFILE_FAIL:
        case UPDATE_PASSWORD_FAIL:
        case UPDATE_USER_FAIL:
        case DELETE_USER_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case CLEAR_ERRORS: {
            return {
                ...state,
                error: undefined,
            };
        }
        default: {
            return state;
        }
    }
};

const initialPasswordState = {
    loading: false,
    message: '',
    success: false,
    error: undefined,
};
const passwordReducer = (state = initialPasswordState, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
        case NEW_PASSWORD_REQUEST: {
            return {
                ...state,
                loading: true,
                error: undefined,
            };
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                loading: false,
                message: action.payload,
            };
        }
        case NEW_PASSWORD_SUCCESS: {
            return {
                ...state,
                success: action.payload,
            };
        }
        case FORGOT_PASSWORD_FAIL:
        case NEW_PASSWORD_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case CLEAR_ERRORS: {
            return {
                ...state,
                error: undefined,
            };
        }
        default: {
            return state;
        }
    }
};

const initialAllUserState = {
    loading: false,
    users: [],
    error: undefined,
};
const allUsersReducer = (state = initialAllUserState, action) => {
    switch (action.type) {
        case ALL_USER_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case ALL_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                users: action.payload,
            };
        }
        case ALL_USER_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case CLEAR_ERRORS: {
            return {
                ...state,
                error: undefined,
            };
        }
        default: {
            return state;
        }
    }
};

const initialUserDetailsState = {
    loading: false,
    user: {},
    error: undefined,
};
const userDetailsReducer = (state = initialUserDetailsState, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case USER_DETAILS_SUCCESS: {
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        }
        case USER_DETAILS_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case CLEAR_ERRORS: {
            return {
                ...state,
                error: undefined,
            };
        }
        default: {
            return state;
        }
    }
};

export { authReducer, userReducer, passwordReducer, allUsersReducer, userDetailsReducer };
