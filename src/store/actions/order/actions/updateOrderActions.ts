import { BaseAction } from '../../BaseAction';

const UPDATE_ORDER_REQUEST = 'UPDATE_ORDER_REQUEST';
const UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS';

interface UpdateOrderRequest extends BaseAction {
    type: typeof UPDATE_ORDER_REQUEST;
}

interface UpdateOrderSuccess extends BaseAction {
    type: typeof UPDATE_ORDER_SUCCESS;
}

export type { UpdateOrderRequest, UpdateOrderSuccess };
export { UPDATE_ORDER_REQUEST, UPDATE_ORDER_SUCCESS };
