import ItemState from '../../store/state/models/itemState';
import ProductApi from './productApi';

class ItemApi {
    _id: string;
    product: ProductApi;
    quantity: number;

    constructor(_id: string, product: ProductApi, quantity: number) {
        this._id = _id;
        this.product = product;
        this.quantity = quantity;
    }

    static toState(itemApi: ItemApi): ItemState {
        return new ItemState(itemApi._id, ProductApi.toState(itemApi.product), itemApi.quantity);
    }
}

export default ItemApi;
