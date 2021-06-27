import { BaseAction } from '../../BaseAction';

import Item from '../../../state/models/Item';

const REQUEST_ADD_PRODUCT_TO_CART_FINISHED = 'REQUEST_ADD_PRODUCT_TO_CART_FINISHED';

interface RequestAddProductToCartFinished extends BaseAction {
    type: typeof REQUEST_ADD_PRODUCT_TO_CART_FINISHED;
    payload?: Item;
}

export type { RequestAddProductToCartFinished };
export { REQUEST_ADD_PRODUCT_TO_CART_FINISHED };
