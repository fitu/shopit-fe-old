import { GET_MY_ORDERS_REQUEST, GET_MY_ORDERS_SUCCESS } from '../../actions/order/actions/getMyOrdersActions';
import { OrderActions } from '../../actions/order/orderActions';
import Order from '../../state/models/Order';

type MyOrdersState = {
    loading: boolean;
    orders: Array<Order>;
};

const INITIAL_STATE = {
    loading: false,
    orders: [],
};

const myOrdersReducer = (state: MyOrdersState | undefined = INITIAL_STATE, action: OrderActions): MyOrdersState => {
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
        default: {
            return state;
        }
    }
};

export type { MyOrdersState };
export default myOrdersReducer;
