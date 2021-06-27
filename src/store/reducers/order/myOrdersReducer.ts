import { REQUEST_GET_MY_ORDERS, REQUEST_GET_MY_ORDERS_FINISHED } from '../../actions/order/actions/getMyOrdersActions';
import { OrderActions } from '../../actions/order/orderActions';
import Order from '../../state/models/Order';

type MyOrdersState = {
    loading: boolean;
    orders?: Array<Order>;
};

const INITIAL_STATE = {
    loading: false,
    orders: [],
};

const myOrdersReducer = (state: MyOrdersState | undefined = INITIAL_STATE, action: OrderActions): MyOrdersState => {
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_GET_MY_ORDERS: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_GET_MY_ORDERS_FINISHED: {
            return {
                ...state,
                loading: false,
                orders: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export type { MyOrdersState };
export default myOrdersReducer;
