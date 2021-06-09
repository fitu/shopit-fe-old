import { Action } from 'redux';

const CREATE_NEW_REVIEW_REQUEST = 'CREATE_NEW_REVIEW_REQUEST';
const CREATE_NEW_REVIEW_SUCCESS = 'CREATE_NEW_REVIEW_SUCCESS';
const CREATE_NEW_REVIEW_RESET = 'CREATE_NEW_REVIEW_RESET';
const CREATE_NEW_REVIEW_FAIL = 'CREATE_NEW_REVIEW_FAIL';

interface CreateNewReviewRequest extends Action {
    type: typeof CREATE_NEW_REVIEW_REQUEST;
}

interface CreateNewReviewSuccess extends Action {
    type: typeof CREATE_NEW_REVIEW_SUCCESS;
}

interface CreateNewReviewReset extends Action {
    type: typeof CREATE_NEW_REVIEW_RESET;
}

interface CreateNewReviewFail extends Action {
    type: typeof CREATE_NEW_REVIEW_FAIL;
    payload: {
        errorMessage: string;
    };
}

export type { CreateNewReviewRequest, CreateNewReviewSuccess, CreateNewReviewReset, CreateNewReviewFail };
export { CREATE_NEW_REVIEW_REQUEST, CREATE_NEW_REVIEW_SUCCESS, CREATE_NEW_REVIEW_RESET, CREATE_NEW_REVIEW_FAIL };
