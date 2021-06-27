import { BaseAction } from '../../BaseAction';

const REQUEST_DELETE_REVIEW_FROM_PRODUCT = 'REQUEST_DELETE_REVIEW_FROM_PRODUCT';
const REQUEST_DELETE_REVIEW_FROM_PRODUCT_FINISHED = 'REQUEST_DELETE_REVIEW_FROM_PRODUCT_FINISHED';

interface RequestDeleteReviewFromProduct extends BaseAction {
    type: typeof REQUEST_DELETE_REVIEW_FROM_PRODUCT;
}

interface RequestDeleteReviewFromProductFinished extends BaseAction {
    type: typeof REQUEST_DELETE_REVIEW_FROM_PRODUCT_FINISHED;
}

export type { RequestDeleteReviewFromProduct, RequestDeleteReviewFromProductFinished };
export { REQUEST_DELETE_REVIEW_FROM_PRODUCT, REQUEST_DELETE_REVIEW_FROM_PRODUCT_FINISHED };
