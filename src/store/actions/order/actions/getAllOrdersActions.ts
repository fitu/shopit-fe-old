import { Action } from 'redux';

import Order from '../../../state/models/Order';

const GET_ALL_ORDERS_REQUEST = 'GET_ALL_ORDERS_REQUEST';
const GET_ALL_ORDERS_SUCCESS = 'GET_ALL_ORDERS_SUCCESS';
const GET_ALL_ORDERS_FAIL = 'GET_ALL_ORDERS_FAIL';

interface GetAllOrdersRequest extends Action {
    type: typeof GET_ALL_ORDERS_REQUEST;
}

interface GetAllOrdersSuccess extends Action {
    type: typeof GET_ALL_ORDERS_SUCCESS;
    payload: {
        orders: Array<Order>;
        totalAmount: number;
    };
}

interface GetAllOrdersFail extends Action {
    type: typeof GET_ALL_ORDERS_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { GetAllOrdersRequest, GetAllOrdersSuccess, GetAllOrdersFail };
export { GET_ALL_ORDERS_REQUEST, GET_ALL_ORDERS_SUCCESS, GET_ALL_ORDERS_FAIL };
