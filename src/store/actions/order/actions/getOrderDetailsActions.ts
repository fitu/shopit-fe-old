import { Action } from 'redux';

import Order from '../../../state/models/Order';

const GET_ORDER_DETAILS_REQUEST = 'GET_ORDER_DETAILS_REQUEST';
const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS';
const GET_ORDER_DETAILS_FAIL = 'GET_ORDER_DETAILS_FAIL';

interface GetOrderDetailsRequest extends Action {
    type: typeof GET_ORDER_DETAILS_REQUEST;
}

interface GetOrderDetailsSuccess extends Action {
    type: typeof GET_ORDER_DETAILS_SUCCESS;
    payload: Order;
}

interface GetOrderDetailsFail extends Action {
    type: typeof GET_ORDER_DETAILS_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { GetOrderDetailsRequest, GetOrderDetailsSuccess, GetOrderDetailsFail };
export { GET_ORDER_DETAILS_REQUEST, GET_ORDER_DETAILS_SUCCESS, GET_ORDER_DETAILS_FAIL };
