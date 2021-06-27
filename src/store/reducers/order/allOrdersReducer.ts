import {
    REQUEST_GET_ALL_ORDERS,
    REQUEST_GET_ALL_ORDERS_FINISHED,
} from '../../actions/order/actions/getAllOrdersActions';
import { OrderActions } from '../../actions/order/orderActions';
import Order from '../../state/models/Order';

type AllOrdersState = {
    loading: boolean;
    orders?: Array<Order>;
    totalAmount: number;
};

const INITIAL_STATE = {
    loading: false,
    orders: [],
    totalAmount: 0,
};

const allOrdersReducer = (state: AllOrdersState | undefined = INITIAL_STATE, action: OrderActions): AllOrdersState => {
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_GET_ALL_ORDERS: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_GET_ALL_ORDERS_FINISHED: {
            return {
                ...state,
                loading: false,
                orders: action.payload?.orders,
                totalAmount: action.payload?.totalAmount ?? 0,
            };
        }
        default: {
            return state;
        }
    }
};

export type { AllOrdersState };
export default allOrdersReducer;
