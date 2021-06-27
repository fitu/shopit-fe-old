import { BaseAction } from '../../BaseAction';

import Order from '../../../state/models/Order';

const REQUEST_CREATE_ORDER = 'REQUEST_CREATE_ORDER';
const REQUEST_CREATE_ORDER_FINISHED = 'REQUEST_CREATE_ORDER_FINISHED';

interface RequestCreateOrder extends BaseAction {
    type: typeof REQUEST_CREATE_ORDER;
}

interface RequestCreateOrderFinished extends BaseAction {
    type: typeof REQUEST_CREATE_ORDER_FINISHED;
    payload?: Order;
}

export type { RequestCreateOrder, RequestCreateOrderFinished };
export { REQUEST_CREATE_ORDER, REQUEST_CREATE_ORDER_FINISHED };
