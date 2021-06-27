import { BaseAction } from '../../BaseAction';

const REQUEST_UPDATE_PRODUCT = 'REQUEST_UPDATE_PRODUCT';
const REQUEST_UPDATE_PRODUCT_FINISHED = 'REQUEST_UPDATE_PRODUCT_FINISHED';

interface RequestUpdateProduct extends BaseAction {
    type: typeof REQUEST_UPDATE_PRODUCT;
}

interface RequestUpdateProductFinished extends BaseAction {
    type: typeof REQUEST_UPDATE_PRODUCT_FINISHED;
}

export type { RequestUpdateProduct, RequestUpdateProductFinished };
export { REQUEST_UPDATE_PRODUCT, REQUEST_UPDATE_PRODUCT_FINISHED };
