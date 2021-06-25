import { CLEAR_ORDER_ERRORS } from '../../actions/order/actions/clearOrderErrorActions';
import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
} from '../../actions/order/actions/createOrderActions';
import { OrderActions } from '../../actions/order/orderActions';
import Order from '../../state/models/Order';

type CreateOrderState = {
    loading: boolean;
    order: Order | undefined;
    errorMessage: string;
};

const initialState = {
    loading: false,
    order: undefined,
    errorMessage: '',
};

const createOrderReducer = (
    state: CreateOrderState | undefined = initialState,
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
        case CREATE_ORDER_FAIL: {
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

export type { CreateOrderState };
export default createOrderReducer;
