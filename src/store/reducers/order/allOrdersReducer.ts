import { GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_SUCCESS } from '../../actions/order/actions/getAllOrdersActions';
import { OrderActions } from '../../actions/order/orderActions';
import Order from '../../state/models/Order';

type AllOrdersState = {
    loading: boolean;
    orders: Array<Order>;
    totalAmount: number;
};

const INITIAL_STATE = {
    loading: false,
    orders: [],
    totalAmount: 0,
};

const allOrdersReducer = (state: AllOrdersState | undefined = INITIAL_STATE, action: OrderActions): AllOrdersState => {
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
        default: {
            return state;
        }
    }
};

export type { AllOrdersState };
export default allOrdersReducer;
