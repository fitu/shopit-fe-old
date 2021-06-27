import { BaseAction } from '../../BaseAction';

import Item from '../../../state/models/Item';

const ADD_PRODUCT_TO_CART_SUCCESS = 'ADD_PRODUCT_TO_CART_SUCCESS';

interface AddProductToCartSuccess extends BaseAction {
    type: typeof ADD_PRODUCT_TO_CART_SUCCESS;
    payload: Item;
}

export type { AddProductToCartSuccess };
export { ADD_PRODUCT_TO_CART_SUCCESS };
