import { BaseAction } from '../../BaseAction';

const REQUEST_CREATE_NEW_REVIEW = 'REQUEST_CREATE_NEW_REVIEW';
const REQUEST_CREATE_NEW_REVIEW_FINISHED = 'REQUEST_CREATE_NEW_REVIEW_FINISHED';

interface RequestCreateNewReview extends BaseAction {
    type: typeof REQUEST_CREATE_NEW_REVIEW;
}

interface RequestCreateNewReviewFinished extends BaseAction {
    type: typeof REQUEST_CREATE_NEW_REVIEW_FINISHED;
}

export type { RequestCreateNewReview, RequestCreateNewReviewFinished };
export { REQUEST_CREATE_NEW_REVIEW, REQUEST_CREATE_NEW_REVIEW_FINISHED };
