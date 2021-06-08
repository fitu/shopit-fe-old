import { CLEAR_ORDER_ERRORS } from '../../actions/order/actions/clearOrderErrorActions';
import {
    GET_ORDER_DETAILS_REQUEST,
    GET_ORDER_DETAILS_SUCCESS,
    GET_ORDER_DETAILS_FAIL,
} from '../../actions/order/actions/getOrderDetailsActions';
import { OrderActions } from '../../actions/order/orderActions';
import OrderStateModel from '../../state/models/orderState';

type OrderDetailsState = {
    loading: boolean;
    order: OrderStateModel | undefined;
    errorMessage: string;
};

const initialState = {
    loading: false,
    order: undefined,
    errorMessage: '',
};

const orderDetailsReducer = (
    state: OrderDetailsState | undefined = initialState,
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
        case GET_ORDER_DETAILS_FAIL: {
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

export type { OrderDetailsState };
export default orderDetailsReducer;
