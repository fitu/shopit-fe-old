import { BaseAction } from '../../BaseAction';

import Order from '../../../state/models/Order';

const GET_ALL_ORDERS_REQUEST = 'GET_ALL_ORDERS_REQUEST';
const GET_ALL_ORDERS_SUCCESS = 'GET_ALL_ORDERS_SUCCESS';

interface GetAllOrdersRequest extends BaseAction {
    type: typeof GET_ALL_ORDERS_REQUEST;
}

interface GetAllOrdersSuccess extends BaseAction {
    type: typeof GET_ALL_ORDERS_SUCCESS;
    payload: {
        orders: Array<Order>;
        totalAmount: number;
    };
}

export type { GetAllOrdersRequest, GetAllOrdersSuccess };
export { GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_SUCCESS };
