import {
    CREATE_NEW_REVIEW_REQUEST,
    CREATE_NEW_REVIEW_SUCCESS,
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
    switch (action.type) {
        case CREATE_NEW_REVIEW_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case CREATE_NEW_REVIEW_SUCCESS: {
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
