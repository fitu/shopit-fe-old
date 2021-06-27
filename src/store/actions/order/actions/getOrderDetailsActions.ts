import { BaseAction } from '../../BaseAction';

import Order from '../../../state/models/Order';

const REQUEST_GET_ORDER_DETAILS = 'REQUEST_GET_ORDER_DETAILS';
const REQUEST_GET_ORDER_DETAILS_FINISHED = 'REQUEST_GET_ORDER_DETAILS_FINISHED';

interface RequestGetOrderDetails extends BaseAction {
    type: typeof REQUEST_GET_ORDER_DETAILS;
}

interface RequestGetOrderDetailsFinished extends BaseAction {
    type: typeof REQUEST_GET_ORDER_DETAILS_FINISHED;
    payload?: Order;
}

export type { RequestGetOrderDetails, RequestGetOrderDetailsFinished };
export { REQUEST_GET_ORDER_DETAILS, REQUEST_GET_ORDER_DETAILS_FINISHED };
