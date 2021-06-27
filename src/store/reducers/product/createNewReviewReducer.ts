import {
    REQUEST_CREATE_NEW_REVIEW,
    REQUEST_CREATE_NEW_REVIEW_FINISHED,
} from '../../actions/product/actions/createNewReviewActions';
import { ProductActions } from '../../actions/product/productAction';

type CreateNewReviewState = {
    loading: boolean;
    success: boolean;
};

const INITIAL_STATE = {
    loading: false,
    success: false,
};

const createNewReviewReducer = (
    state: CreateNewReviewState | undefined = INITIAL_STATE,
    action: ProductActions,
): CreateNewReviewState => {
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_CREATE_NEW_REVIEW: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_CREATE_NEW_REVIEW_FINISHED: {
            return {
                ...state,
                loading: false,
                success: true,
            };
        }
        default: {
            return state;
        }
    }
};

export type { CreateNewReviewState };
export default createNewReviewReducer;
