import ProductApi from '../../api/models/productApi';
import Item from '../../models/item';

import ImageState from './imageState';
import ProductState from './productState';

class ItemState {
    id: string;
    product: ProductState;
    name: string;
    price: number;
    images: Array<ImageState>;
    quantity: number;

    constructor(
        id: string,
        product: ProductState,
        name: string,
        price: number,
        images: Array<ImageState>,
        quantity: number,
    ) {
        this.id = id;
        this.product = product;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.images = images;
    }

    static fromModelToState(item: Item): ItemState {
        return new ItemState(
            item.id,
            ProductState.fromModelToState(item.product),
            item.name,
            item.price,
            item.images.map((image) => ImageState.fromModelToState(image)),
            item.quantity,
        );
    }

    static fromStateToModel(itemState: ItemState): Item {
        return new Item(
            itemState.id,
            ProductState.fromStateToModel(itemState.product),
            itemState.name,
            itemState.price,
            itemState.images.map((image) => ImageState.fromStateToModel(image)),
            itemState.quantity,
        );
    }

    static fromApiToState(productApi: ProductApi, quantity: number): ItemState {
        return new ItemState(
            productApi._id,
            ProductState.fromApiToState(productApi),
            productApi.name,
            productApi.price,
            productApi.images.map((image) => ImageState.fromApiToState(image)),
            quantity,
        );
    }
}

export default ItemState;
