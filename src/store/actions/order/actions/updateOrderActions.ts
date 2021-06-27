import { BaseAction } from '../../BaseAction';

const REQUEST_UPDATE_ORDER = 'REQUEST_UPDATE_ORDER';
const REQUEST_UPDATE_ORDER_FINISHED = 'REQUEST_UPDATE_ORDER_FINISHED';

interface RequestUpdateOrder extends BaseAction {
    type: typeof REQUEST_UPDATE_ORDER;
}

interface RequestUpdateOrderFinished extends BaseAction {
    type: typeof REQUEST_UPDATE_ORDER_FINISHED;
}

export type { RequestUpdateOrder, RequestUpdateOrderFinished };
export { REQUEST_UPDATE_ORDER, REQUEST_UPDATE_ORDER_FINISHED };
