import { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from '../../actions/order/actions/createOrderActions';
import { OrderActions } from '../../actions/order/orderActions';
import Order from '../../state/models/Order';

type CreateOrderState = {
    loading: boolean;
    order: Order | undefined;
};

const INITIAL_STATE = {
    loading: false,
    order: undefined,
};

const createOrderReducer = (
    state: CreateOrderState | undefined = INITIAL_STATE,
    action: OrderActions,
): CreateOrderState => {
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
        default: {
            return state;
        }
    }
};

export type { CreateOrderState };
export default createOrderReducer;
