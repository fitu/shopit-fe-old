import { CLEAR_ORDER_ERRORS } from '../../actions/order/actions/clearOrderErrorActions';
import {
    GET_MY_ORDERS_REQUEST,
    GET_MY_ORDERS_SUCCESS,
    GET_MY_ORDERS_FAIL,
} from '../../actions/order/actions/getMyOrdersActions';
import { OrderActions } from '../../actions/order/orderActions';
import OrderState from '../../state/models/orderState';

type MyOrdersState = {
    loading: boolean;
    orders: Array<OrderState>;
    errorMessage: string;
};

const initialState = {
    loading: false,
    orders: [],
    errorMessage: '',
};

const myOrdersReducer = (state: MyOrdersState | undefined = initialState, action: OrderActions): MyOrdersState => {
    switch (action.type) {
        case GET_MY_ORDERS_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_MY_ORDERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                orders: action.payload,
            };
        }
        case GET_MY_ORDERS_FAIL: {
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.errorMessage,
            };
        }
        case CLEAR_ORDER_ERRORS: {
            return {
                ...state,
                errorMessage: ' ',
            };
        }
        default: {
            return state;
        }
    }
};

export type { MyOrdersState };
export default myOrdersReducer;
