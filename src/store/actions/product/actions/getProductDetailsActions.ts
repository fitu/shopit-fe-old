import { BaseAction } from '../../BaseAction';

import Product from '../../../state/models/Product';

const REQUEST_GET_PRODUCT_DETAILS = 'REQUEST_GET_PRODUCT_DETAILS';
const REQUEST_GET_PRODUCT_DETAILS_FINISHED = 'REQUEST_GET_PRODUCT_DETAILS_FINISHED';

interface RequestGetProductDetails extends BaseAction {
    type: typeof REQUEST_GET_PRODUCT_DETAILS;
}

interface RequestGetProductDetailsFinished extends BaseAction {
    type: typeof REQUEST_GET_PRODUCT_DETAILS_FINISHED;
    payload?: Product;
}

export type { RequestGetProductDetails, RequestGetProductDetailsFinished };
export { REQUEST_GET_PRODUCT_DETAILS, REQUEST_GET_PRODUCT_DETAILS_FINISHED };
