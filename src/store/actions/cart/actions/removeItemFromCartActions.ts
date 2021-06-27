import { BaseAction } from '../../BaseAction';

const REQUEST_REMOVE_ITEM_FROM_CART_FINISHED = 'REQUEST_REMOVE_ITEM_FROM_CART_FINISHED';

interface RequestRemoveItemFromCartFinished extends BaseAction {
    type: typeof REQUEST_REMOVE_ITEM_FROM_CART_FINISHED;
    payload?: {
        id: string;
    };
}

export type { RequestRemoveItemFromCartFinished };
export { REQUEST_REMOVE_ITEM_FROM_CART_FINISHED };
