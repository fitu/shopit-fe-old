import { BaseAction } from '../../BaseAction';

import Order from '../../../state/models/Order';

const GET_MY_ORDERS_REQUEST = 'GET_MY_ORDERS_REQUEST';
const GET_MY_ORDERS_SUCCESS = 'GET_MY_ORDERS_SUCCESS';

interface GetMyOrdersRequest extends BaseAction {
    type: typeof GET_MY_ORDERS_REQUEST;
}

interface GetMyOrdersSuccess extends BaseAction {
    type: typeof GET_MY_ORDERS_SUCCESS;
    payload: Array<Order>;
}

export type { GetMyOrdersRequest, GetMyOrdersSuccess };
export { GET_MY_ORDERS_REQUEST, GET_MY_ORDERS_SUCCESS };
