import { BaseAction } from '../../BaseAction';

import Order from '../../../state/models/Order';

const REQUEST_GET_MY_ORDERS = 'REQUEST_GET_MY_ORDERS';
const REQUEST_GET_MY_ORDERS_FINISHED = 'REQUEST_GET_MY_ORDERS_FINISHED';

interface RequestGetMyOrders extends BaseAction {
    type: typeof REQUEST_GET_MY_ORDERS;
}

interface RequestGetMyOrdersFinished extends BaseAction {
    type: typeof REQUEST_GET_MY_ORDERS_FINISHED;
    payload?: Array<Order>;
}

export type { RequestGetMyOrders, RequestGetMyOrdersFinished };
export { REQUEST_GET_MY_ORDERS, REQUEST_GET_MY_ORDERS_FINISHED };
