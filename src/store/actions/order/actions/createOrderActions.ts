import { Action } from 'redux';

import Order from '../../../state/models/Order';

const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';
const CREATE_ORDER_FAIL = 'CREATE_ORDER_FAIL';

interface CreateOrderRequest extends Action {
    type: typeof CREATE_ORDER_REQUEST;
}

interface CreateOrderSuccess extends Action {
    type: typeof CREATE_ORDER_SUCCESS;
    payload: Order;
}

interface CreateOrderFail extends Action {
    type: typeof CREATE_ORDER_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { CreateOrderRequest, CreateOrderSuccess, CreateOrderFail };
export { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, CREATE_ORDER_FAIL };
