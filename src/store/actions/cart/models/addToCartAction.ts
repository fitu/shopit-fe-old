import Item from '../../../../models/item';

const ADD_TO_CART = 'ADD_TO_CART';

interface AddToCart {
    type: typeof ADD_TO_CART;
    payload: Item;
}

export type { AddToCart };
export { ADD_TO_CART };
