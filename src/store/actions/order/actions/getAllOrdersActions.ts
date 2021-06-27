import { BaseAction } from '../../BaseAction';

import Order from '../../../state/models/Order';

const REQUEST_GET_ALL_ORDERS = 'REQUEST_GET_ALL_ORDERS';
const REQUEST_GET_ALL_ORDERS_FINISHED = 'REQUEST_GET_ALL_ORDERS_FINISHED';

interface RequestGetAllOrders extends BaseAction {
    type: typeof REQUEST_GET_ALL_ORDERS;
}

interface RequestGetAllOrdersFinished extends BaseAction {
    type: typeof REQUEST_GET_ALL_ORDERS_FINISHED;
    payload?: {
        orders: Array<Order>;
        totalAmount: number;
    };
}

export type { RequestGetAllOrders, RequestGetAllOrdersFinished };
export { REQUEST_GET_ALL_ORDERS, REQUEST_GET_ALL_ORDERS_FINISHED };
