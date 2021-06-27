import { BaseAction } from '../../BaseAction';

import Order from '../../../state/models/Order';

const GET_ORDER_DETAILS_REQUEST = 'GET_ORDER_DETAILS_REQUEST';
const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS';

interface GetOrderDetailsRequest extends BaseAction {
    type: typeof GET_ORDER_DETAILS_REQUEST;
}

interface GetOrderDetailsSuccess extends BaseAction {
    type: typeof GET_ORDER_DETAILS_SUCCESS;
    payload: Order;
}

export type { GetOrderDetailsRequest, GetOrderDetailsSuccess };
export { GET_ORDER_DETAILS_REQUEST, GET_ORDER_DETAILS_SUCCESS };
