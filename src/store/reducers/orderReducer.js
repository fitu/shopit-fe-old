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

const initialOrdersState = {
    loading: false,
    order: {},
    error: undefined,
};
const ordersReducer = (state = initialOrdersState, action) => {
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
                error: undefined,
            };
        }
        default: {
            return state;
        }
    }
};

const initialMyOrdersState = {
    loading: false,
    orders: [],
    error: undefined,
};
const myOrdersReducer = (state = initialMyOrdersState, action) => {
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
                error: undefined,
            };
        }
        default: {
            return state;
        }
    }
};

const initialOrderDetailsState = {
    loading: false,
    order: {},
    error: undefined,
};
const orderDetailsReducer = (state = initialOrderDetailsState, action) => {
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
                error: undefined,
            };
        }
        default: {
            return state;
        }
    }
};

const initialAllOrdersState = {
    loading: false,
    orders: [],
    totalAmount: 0,
    error: undefined,
};
const allOrdersReducer = (state = initialAllOrdersState, action) => {
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
                error: undefined,
            };
        }
        default: {
            return state;
        }
    }
};

const initialOrderState = {
    loading: false,
    isUpdated: false,
    isDeleted: false,
    error: undefined,
};
const orderReducer = (state = initialOrderState, action) => {
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
                error: undefined,
            };
        }
        default: {
            return state;
        }
    }
};

export { ordersReducer, myOrdersReducer, orderDetailsReducer, allOrdersReducer, orderReducer };
