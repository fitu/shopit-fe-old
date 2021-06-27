import { BaseAction } from '../../BaseAction';

const REMOVE_ITEM_FROM_CART_SUCCESS = 'REMOVE_ITEM_FROM_CART_SUCCESS';

interface RemoveItemFromCartSuccess extends BaseAction {
    type: typeof REMOVE_ITEM_FROM_CART_SUCCESS;
    payload: {
        id: string;
    };
}

export type { RemoveItemFromCartSuccess };
export { REMOVE_ITEM_FROM_CART_SUCCESS };
