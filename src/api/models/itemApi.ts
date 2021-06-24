/* eslint-disable no-underscore-dangle */
// TODO: change this in Backend
import ItemState from '../../store/state/models/itemState';

import ProductApi from './productApi';

class ItemApi {
    constructor(public _id: string, public product: ProductApi, public quantity: number) {}

    static toState(itemApi: ItemApi): ItemState {
        return new ItemState(itemApi._id, ProductApi.toState(itemApi.product), itemApi.quantity);
    }
}

export default ItemApi;
