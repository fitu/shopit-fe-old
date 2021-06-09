import ItemApi from '../../models/itemApi';

class AddItemToCartResponse {
    item: ItemApi;

    constructor(item: ItemApi) {
        this.item = item;
    }
}

export default AddItemToCartResponse;
