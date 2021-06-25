import { Action } from 'redux';

import Order from '../../../state/models/Order';

const GET_MY_ORDERS_REQUEST = 'GET_MY_ORDERS_REQUEST';
const GET_MY_ORDERS_SUCCESS = 'GET_MY_ORDERS_SUCCESS';
const GET_MY_ORDERS_FAIL = 'GET_MY_ORDERS_FAIL';

interface GetMyOrdersRequest extends Action {
    type: typeof GET_MY_ORDERS_REQUEST;
}

interface GetMyOrdersSuccess extends Action {
    type: typeof GET_MY_ORDERS_SUCCESS;
    payload: Array<Order>;
}

interface GetMyOrdersFail extends Action {
    type: typeof GET_MY_ORDERS_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { GetMyOrdersRequest, GetMyOrdersSuccess, GetMyOrdersFail };
export { GET_MY_ORDERS_REQUEST, GET_MY_ORDERS_SUCCESS, GET_MY_ORDERS_FAIL };
