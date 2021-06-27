import {
    GET_ORDER_DETAILS_REQUEST,
    GET_ORDER_DETAILS_SUCCESS,
} from '../../actions/order/actions/getOrderDetailsActions';
import { OrderActions } from '../../actions/order/orderActions';
import Order from '../../state/models/Order';

type OrderDetailsState = {
    loading: boolean;
    order: Order | undefined;
};

const INITIAL_STATE = {
    loading: false,
    order: undefined,
};

const orderDetailsReducer = (
    state: OrderDetailsState | undefined = INITIAL_STATE,
    action: OrderActions,
): OrderDetailsState => {
    switch (action.type) {
        case GET_ORDER_DETAILS_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_ORDER_DETAILS_SUCCESS: {
            return {
                ...state,
                loading: false,
                order: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export type { OrderDetailsState };
export default orderDetailsReducer;
