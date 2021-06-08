import { Action } from 'redux';

const UPDATE_ORDER_REQUEST = 'UPDATE_ORDER_REQUEST';
const UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS';
const UPDATE_ORDER_RESET = 'UPDATE_ORDER_RESET';
const UPDATE_ORDER_FAIL = 'UPDATE_ORDER_FAIL';

interface UpdateOrderRequest extends Action {
    type: typeof UPDATE_ORDER_REQUEST;
}

interface UpdateOrderSuccess extends Action {
    type: typeof UPDATE_ORDER_SUCCESS;
}

interface UpdateOrderReset extends Action {
    type: typeof UPDATE_ORDER_RESET;
}

interface UpdateOrderFail extends Action {
    type: typeof UPDATE_ORDER_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { UpdateOrderRequest, UpdateOrderSuccess, UpdateOrderReset, UpdateOrderFail };
export { UPDATE_ORDER_REQUEST, UPDATE_ORDER_SUCCESS, UPDATE_ORDER_RESET, UPDATE_ORDER_FAIL };
