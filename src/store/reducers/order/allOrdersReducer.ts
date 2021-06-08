import { CLEAR_ORDER_ERRORS } from '../../actions/order/actions/clearOrderErrorActions';
import {
    GET_ALL_ORDERS_REQUEST,
    GET_ALL_ORDERS_SUCCESS,
    GET_ALL_ORDERS_FAIL,
} from '../../actions/order/actions/getAllOrdersActions';
import { OrderActions } from '../../actions/order/orderActions';
import OrderState from '../../state/models/orderState';

type AllOrdersState = {
    loading: boolean;
    orders: Array<OrderState>;
    totalAmount: number;
    errorMessage: string;
};

const initialState = {
    loading: false,
    orders: [],
    totalAmount: 0,
    errorMessage: '',
};

const allOrdersReducer = (state: AllOrdersState | undefined = initialState, action: OrderActions): AllOrdersState => {
    switch (action.type) {
        case GET_ALL_ORDERS_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_ALL_ORDERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                orders: action.payload.orders,
                totalAmount: action.payload.totalAmount,
            };
        }
        case GET_ALL_ORDERS_FAIL: {
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.errorMessage,
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

export type { AllOrdersState };
export default allOrdersReducer;
