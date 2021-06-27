import { BaseAction } from '../../BaseAction';

const CREATE_NEW_REVIEW_REQUEST = 'CREATE_NEW_REVIEW_REQUEST';
const CREATE_NEW_REVIEW_SUCCESS = 'CREATE_NEW_REVIEW_SUCCESS';
const CREATE_NEW_REVIEW_RESET = 'CREATE_NEW_REVIEW_RESET';
const CREATE_NEW_REVIEW_FAIL = 'CREATE_NEW_REVIEW_FAIL';

interface CreateNewReviewRequest extends BaseAction {
    type: typeof CREATE_NEW_REVIEW_REQUEST;
}

interface CreateNewReviewSuccess extends BaseAction {
    type: typeof CREATE_NEW_REVIEW_SUCCESS;
}

interface CreateNewReviewReset extends BaseAction {
    type: typeof CREATE_NEW_REVIEW_RESET;
}

interface CreateNewReviewFail extends BaseAction {
    type: typeof CREATE_NEW_REVIEW_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { CreateNewReviewRequest, CreateNewReviewSuccess, CreateNewReviewReset, CreateNewReviewFail };
export { CREATE_NEW_REVIEW_REQUEST, CREATE_NEW_REVIEW_SUCCESS, CREATE_NEW_REVIEW_RESET, CREATE_NEW_REVIEW_FAIL };
