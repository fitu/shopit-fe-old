import { DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS } from '../../actions/order/actions/deleteOrderActions';
import { UPDATE_ORDER_REQUEST, UPDATE_ORDER_SUCCESS } from '../../actions/order/actions/updateOrderActions';
import { OrderActions } from '../../actions/order/orderActions';

type ModifyOrderState = {
    loading: boolean;
    isUpdated: boolean;
    isDeleted: boolean;
};

const INITIAL_STATE = {
    loading: false,
    isUpdated: false,
    isDeleted: false,
};

const modifyOrderReducer = (
    state: ModifyOrderState | undefined = INITIAL_STATE,
    action: OrderActions,
): ModifyOrderState => {
    switch (action.type) {
        case UPDATE_ORDER_REQUEST:
        case DELETE_ORDER_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case UPDATE_ORDER_SUCCESS: {
            return {
                ...state,
                loading: false,
                isUpdated: true,
            };
        }
        case DELETE_ORDER_SUCCESS: {
            return {
                ...state,
                loading: false,
                isDeleted: true,
            };
        }
        default: {
            return state;
        }
    }
};

export type { ModifyOrderState };
export default modifyOrderReducer;
