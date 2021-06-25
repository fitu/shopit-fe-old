import { Action } from 'redux';

import Review from '../../../state/models/Review';

const GET_ALL_REVIEWS_FROM_PRODUCT_REQUEST = 'GET_ALL_REVIEWS_FROM_PRODUCT_REQUEST';
const GET_ALL_REVIEWS_FROM_PRODUCT_SUCCESS = 'GET_ALL_REVIEWS_FROM_PRODUCT_SUCCESS';
const GET_ALL_REVIEWS_FROM_PRODUCT_FAIL = 'GET_ALL_REVIEWS_FROM_PRODUCT_FAIL';

interface GetAllReviewsFromProductRequest extends Action {
    type: typeof GET_ALL_REVIEWS_FROM_PRODUCT_REQUEST;
}

interface GetAllReviewsFromProductSuccess extends Action {
    type: typeof GET_ALL_REVIEWS_FROM_PRODUCT_SUCCESS;
    payload: Array<Review>;
}

interface GetAllReviewsFromProductFail extends Action {
    type: typeof GET_ALL_REVIEWS_FROM_PRODUCT_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { GetAllReviewsFromProductRequest, GetAllReviewsFromProductSuccess, GetAllReviewsFromProductFail };
export {
    GET_ALL_REVIEWS_FROM_PRODUCT_REQUEST,
    GET_ALL_REVIEWS_FROM_PRODUCT_SUCCESS,
    GET_ALL_REVIEWS_FROM_PRODUCT_FAIL,
};
