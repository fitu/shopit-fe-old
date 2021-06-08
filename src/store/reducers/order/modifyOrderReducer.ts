import { OrderActions } from '../../actions/order/orderActions';
import {
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_RESET,
    UPDATE_ORDER_FAIL,
} from '../../actions/order/actions/updateOrderActions';
import {
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_RESET,
    DELETE_ORDER_FAIL,
} from '../../actions/order/actions/deleteOrderActions';
import { CLEAR_ORDER_ERRORS } from '../../actions/order/actions/clearOrderErrorActions';

type ModifyOrderState = {
    loading: boolean;
    isUpdated: boolean;
    isDeleted: boolean;
    errorMessage: string;
};

const initialState = {
    loading: false,
    isUpdated: false,
    isDeleted: false,
    errorMessage: '',
};

const modifyOrderReducer = (
    state: ModifyOrderState | undefined = initialState,
    action: OrderActions,
): ModifyOrderState => {
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
                isUpdated: true,
            };
        }
        case DELETE_ORDER_SUCCESS: {
            return {
                ...state,
                loading: false,
                isDeleted: true,
            };
        }
        case UPDATE_ORDER_FAIL:
        case DELETE_ORDER_FAIL: {
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.errorMessage,
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
        case CLEAR_ORDER_ERRORS: {
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

export type { ModifyOrderState };
export default modifyOrderReducer;
