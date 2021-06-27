import { REQUEST_CREATE_ORDER, REQUEST_CREATE_ORDER_FINISHED } from '../../actions/order/actions/createOrderActions';
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
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_CREATE_ORDER: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_CREATE_ORDER_FINISHED: {
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
