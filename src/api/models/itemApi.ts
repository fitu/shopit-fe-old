/* eslint-disable no-underscore-dangle */
// TODO: change this in Backend
import Item from '../../store/state/models/Item';

import ProductApi from './productApi';

class ItemApi {
    constructor(public _id: string, public product: ProductApi, public quantity: number) {}

    static toState(itemApi: ItemApi): Item {
        return new Item(itemApi._id, ProductApi.toState(itemApi.product), itemApi.quantity);
    }
}

export default ItemApi;
