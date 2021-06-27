import { BaseAction } from '../../BaseAction';

const CREATE_NEW_REVIEW_REQUEST = 'CREATE_NEW_REVIEW_REQUEST';
const CREATE_NEW_REVIEW_SUCCESS = 'CREATE_NEW_REVIEW_SUCCESS';

interface CreateNewReviewRequest extends BaseAction {
    type: typeof CREATE_NEW_REVIEW_REQUEST;
}

interface CreateNewReviewSuccess extends BaseAction {
    type: typeof CREATE_NEW_REVIEW_SUCCESS;
}

export type { CreateNewReviewRequest, CreateNewReviewSuccess };
export { CREATE_NEW_REVIEW_REQUEST, CREATE_NEW_REVIEW_SUCCESS };
