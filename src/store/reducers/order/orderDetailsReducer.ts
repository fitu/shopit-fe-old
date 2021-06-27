import {
    REQUEST_GET_ORDER_DETAILS,
    REQUEST_GET_ORDER_DETAILS_FINISHED,
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
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_GET_ORDER_DETAILS: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_GET_ORDER_DETAILS_FINISHED: {
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
