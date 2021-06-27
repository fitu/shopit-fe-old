import { BaseAction } from '../../BaseAction';

const REQUEST_DELETE_ORDER = 'REQUEST_DELETE_ORDER';
const REQUEST_DELETE_ORDER_FINISHED = 'REQUEST_DELETE_ORDER_FINISHED';

interface RequestDeleteOrder extends BaseAction {
    type: typeof REQUEST_DELETE_ORDER;
}

interface RequestDeleteOrderFinished extends BaseAction {
    type: typeof REQUEST_DELETE_ORDER_FINISHED;
}

export type { RequestDeleteOrder, RequestDeleteOrderFinished };
export { REQUEST_DELETE_ORDER, REQUEST_DELETE_ORDER_FINISHED };
