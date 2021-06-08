import { Action } from 'redux';

const DELETE_ORDER_REQUEST = 'DELETE_ORDER_REQUEST';
const DELETE_ORDER_SUCCESS = 'DELETE_ORDER_SUCCESS';
const DELETE_ORDER_RESET = 'DELETE_ORDER_RESET';
const DELETE_ORDER_FAIL = 'DELETE_ORDER_FAIL';

interface DeleteOrderRequest extends Action {
    type: typeof DELETE_ORDER_REQUEST;
}

interface DeleteOrderSuccess extends Action {
    type: typeof DELETE_ORDER_SUCCESS;
}

interface DeleteOrderReset extends Action {
    type: typeof DELETE_ORDER_RESET;
}

interface DeleteOrderFail extends Action {
    type: typeof DELETE_ORDER_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { DeleteOrderRequest, DeleteOrderSuccess, DeleteOrderReset, DeleteOrderFail };
export { DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELETE_ORDER_RESET, DELETE_ORDER_FAIL };