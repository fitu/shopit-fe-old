import { BaseAction } from '../../BaseAction';

import Review from '../../../state/models/Review';

const REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT = 'REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT';
const REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT_FINISHED = 'REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT_FINISHED';

interface RequestGetAllReviewsFromProduct extends BaseAction {
    type: typeof REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT;
}

interface RequestGetAllReviewsFromProductFinished extends BaseAction {
    type: typeof REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT_FINISHED;
    payload?: Array<Review>;
}

export type { RequestGetAllReviewsFromProduct, RequestGetAllReviewsFromProductFinished };
export { REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT, REQUEST_GET_ALL_REVIEWS_FROM_PRODUCT_FINISHED };
