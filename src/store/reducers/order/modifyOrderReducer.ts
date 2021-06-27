import { REQUEST_DELETE_ORDER, REQUEST_DELETE_ORDER_FINISHED } from '../../actions/order/actions/deleteOrderActions';
import { REQUEST_UPDATE_ORDER, REQUEST_UPDATE_ORDER_FINISHED } from '../../actions/order/actions/updateOrderActions';
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
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_UPDATE_ORDER:
        case REQUEST_DELETE_ORDER: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_UPDATE_ORDER_FINISHED: {
            return {
                ...state,
                loading: false,
                isUpdated: true,
            };
        }
        case REQUEST_DELETE_ORDER_FINISHED: {
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
