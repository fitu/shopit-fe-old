import { BaseAction } from '../../BaseAction';

import Product from '../../../state/models/Product';

const REQUEST_CREATE_NEW_PRODUCT = 'REQUEST_CREATE_NEW_PRODUCT';
const REQUEST_CREATE_NEW_PRODUCT_FINISHED = 'REQUEST_CREATE_NEW_PRODUCT_FINISHED';

interface RequestCreateNewProduct extends BaseAction {
    type: typeof REQUEST_CREATE_NEW_PRODUCT;
}

interface RequestCreateNewProductFinished extends BaseAction {
    type: typeof REQUEST_CREATE_NEW_PRODUCT_FINISHED;
    payload?: Product;
}

export type { RequestCreateNewProduct, RequestCreateNewProductFinished };
export { REQUEST_CREATE_NEW_PRODUCT, REQUEST_CREATE_NEW_PRODUCT_FINISHED };
