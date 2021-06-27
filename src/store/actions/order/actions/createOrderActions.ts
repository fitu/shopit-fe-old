import { BaseAction } from '../../BaseAction';

import Order from '../../../state/models/Order';

const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';

interface CreateOrderRequest extends BaseAction {
    type: typeof CREATE_ORDER_REQUEST;
}

interface CreateOrderSuccess extends BaseAction {
    type: typeof CREATE_ORDER_SUCCESS;
    payload: Order;
}

export type { CreateOrderRequest, CreateOrderSuccess };
export { CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS };
