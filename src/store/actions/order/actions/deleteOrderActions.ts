import { BaseAction } from '../../BaseAction';

const DELETE_ORDER_REQUEST = 'DELETE_ORDER_REQUEST';
const DELETE_ORDER_SUCCESS = 'DELETE_ORDER_SUCCESS';
const DELETE_ORDER_RESET = 'DELETE_ORDER_RESET';

interface DeleteOrderRequest extends BaseAction {
    type: typeof DELETE_ORDER_REQUEST;
}

interface DeleteOrderSuccess extends BaseAction {
    type: typeof DELETE_ORDER_SUCCESS;
}

interface DeleteOrderReset extends BaseAction {
    type: typeof DELETE_ORDER_RESET;
}

export type { DeleteOrderRequest, DeleteOrderSuccess, DeleteOrderReset };
export { DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELETE_ORDER_RESET };
