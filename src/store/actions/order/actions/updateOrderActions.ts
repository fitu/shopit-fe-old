import { BaseAction } from '../../BaseAction';

const UPDATE_ORDER_REQUEST = 'UPDATE_ORDER_REQUEST';
const UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS';
const UPDATE_ORDER_RESET = 'UPDATE_ORDER_RESET';

interface UpdateOrderRequest extends BaseAction {
    type: typeof UPDATE_ORDER_REQUEST;
}

interface UpdateOrderSuccess extends BaseAction {
    type: typeof UPDATE_ORDER_SUCCESS;
}

interface UpdateOrderReset extends BaseAction {
    type: typeof UPDATE_ORDER_RESET;
}

export type { UpdateOrderRequest, UpdateOrderSuccess, UpdateOrderReset };
export { UPDATE_ORDER_REQUEST, UPDATE_ORDER_SUCCESS, UPDATE_ORDER_RESET };
