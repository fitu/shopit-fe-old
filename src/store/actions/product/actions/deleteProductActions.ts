import { BaseAction } from '../../BaseAction';

const REQUEST_DELETE_PRODUCT = 'REQUEST_DELETE_PRODUCT';
const REQUEST_DELETE_PRODUCT_FINISHED = 'REQUEST_DELETE_PRODUCT_FINISHED';

interface RequestDeleteProduct extends BaseAction {
    type: typeof REQUEST_DELETE_PRODUCT;
}

interface RequestDeleteProductFinished extends BaseAction {
    type: typeof REQUEST_DELETE_PRODUCT_FINISHED;
}

export type { RequestDeleteProduct, RequestDeleteProductFinished };
export { REQUEST_DELETE_PRODUCT, REQUEST_DELETE_PRODUCT_FINISHED };
