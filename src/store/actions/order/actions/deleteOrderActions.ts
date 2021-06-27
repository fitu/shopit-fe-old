import { BaseAction } from '../../BaseAction';

const DELETE_ORDER_REQUEST = 'DELETE_ORDER_REQUEST';
const DELETE_ORDER_SUCCESS = 'DELETE_ORDER_SUCCESS';

interface DeleteOrderRequest extends BaseAction {
    type: typeof DELETE_ORDER_REQUEST;
}

interface DeleteOrderSuccess extends BaseAction {
    type: typeof DELETE_ORDER_SUCCESS;
}

export type { DeleteOrderRequest, DeleteOrderSuccess };
export { DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS };
