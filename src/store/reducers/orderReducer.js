import {
    ALL_ORDERS_FAIL,
    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    CLEAR_ERRORS,
    CREATE_ORDER_FAIL,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_RESET,
    DELETE_ORDER_SUCCESS,
    MY_ORDERS_FAIL,
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    UPDATE_ORDER_FAIL,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_RESET,
    UPDATE_ORDER_SUCCESS,
} from '../actions/orderActions';

export const ordersReducer = (state = { loading: false, order: {}, error: null }, action) => {
    switch (action.type) {
    case CREATE_ORDER_REQUEST: {
        return {
            ...state,
            loading: true,
        };
    }
    case CREATE_ORDER_SUCCESS: {
        return {
            ...state,
            loading: false,
            order: action.payload,
        };
    }
    case CREATE_ORDER_FAIL: {
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    }
    case CLEAR_ERRORS: {
        return {
            ...state,
            error: null,
        };
    }
    default: {
        return state;
    }
    }
};

export const myOrdersReducer = (state = { loading: false, orders: [], error: null }, action) => {
    switch (action.type) {
    case MY_ORDERS_REQUEST: {
        return {
            ...state,
            loading: true,
        };
    }
    case MY_ORDERS_SUCCESS: {
        return {
            ...state,
            loading: false,
            orders: action.payload,
        };
    }
    case MY_ORDERS_FAIL: {
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    }
    case CLEAR_ERRORS: {
        return {
            ...state,
            error: null,
        };
    }
    default: {
        return state;
    }
    }
};

export const orderDetailsReducer = (state = { loading: false, order: {}, error: null }, action) => {
    switch (action.type) {
    case ORDER_DETAILS_REQUEST: {
        return {
            ...state,
            loading: true,
        };
    }
    case ORDER_DETAILS_SUCCESS: {
        return {
            ...state,
            loading: false,
            order: action.payload,
        };
    }
    case ORDER_DETAILS_FAIL: {
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    }
    case CLEAR_ERRORS: {
        return {
            ...state,
            error: null,
        };
    }
    default: {
        return state;
    }
    }
};

export const allOrdersReducer = (state = {
    loading: false, orders: [], totalAmount: 0, error: null,
}, action) => {
    switch (action.type) {
    case ALL_ORDERS_REQUEST: {
        return {
            ...state,
            loading: true,
        };
    }
    case ALL_ORDERS_SUCCESS: {
        return {
            ...state,
            loading: false,
            orders: action.payload.orders,
            totalAmount: action.payload.totalAmount,
        };
    }
    case ALL_ORDERS_FAIL: {
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    }
    case CLEAR_ERRORS: {
        return {
            ...state,
            error: null,
        };
    }
    default: {
        return state;
    }
    }
};

export const orderReducer = (state = {
    loading: false, isUpdated: false, isDeleted: false, error: null,
}, action) => {
    switch (action.type) {
    case UPDATE_ORDER_REQUEST:
    case DELETE_ORDER_REQUEST: {
        return {
            ...state,
            loading: true,
        };
    }
    case UPDATE_ORDER_SUCCESS: {
        return {
            ...state,
            loading: false,
            isUpdated: action.payload,
        };
    }
    case DELETE_ORDER_SUCCESS: {
        return {
            ...state,
            loading: false,
            isDeleted: action.payload,
        };
    }
    case UPDATE_ORDER_FAIL:
    case DELETE_ORDER_FAIL: {
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
    }
    case DELETE_ORDER_RESET: {
        return {
            ...state,
            isDeleted: false,
        };
    }
    case UPDATE_ORDER_RESET: {
        return {
            ...state,
            isUpdated: false,
        };
    }
    case CLEAR_ERRORS: {
        return {
            ...state,
            error: null,
        };
    }
    default: {
        return state;
    }
    }
};
