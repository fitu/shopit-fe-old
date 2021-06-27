import { BaseAction } from '../../BaseAction';

import Review from '../../../state/models/Review';

const GET_ALL_REVIEWS_FROM_PRODUCT_REQUEST = 'GET_ALL_REVIEWS_FROM_PRODUCT_REQUEST';
const GET_ALL_REVIEWS_FROM_PRODUCT_SUCCESS = 'GET_ALL_REVIEWS_FROM_PRODUCT_SUCCESS';

interface GetAllReviewsFromProductRequest extends BaseAction {
    type: typeof GET_ALL_REVIEWS_FROM_PRODUCT_REQUEST;
}

interface GetAllReviewsFromProductSuccess extends BaseAction {
    type: typeof GET_ALL_REVIEWS_FROM_PRODUCT_SUCCESS;
    payload: Array<Review>;
}

export type { GetAllReviewsFromProductRequest, GetAllReviewsFromProductSuccess };
export { GET_ALL_REVIEWS_FROM_PRODUCT_REQUEST, GET_ALL_REVIEWS_FROM_PRODUCT_SUCCESS };
