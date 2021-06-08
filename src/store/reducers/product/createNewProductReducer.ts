import { ProductActions } from '../../actions/product/productAction';
import {
    CREATE_NEW_PRODUCT_REQUEST,
    CREATE_NEW_PRODUCT_SUCCESS,
    CREATE_NEW_PRODUCT_RESET,
    CREATE_NEW_PRODUCT_FAIL,
} from '../../actions/product/actions/createNewProductActions';
import { CLEAR_PRODUCT_ERRORS } from '../../actions/product/actions/clearProductErrorsActions';
import ProductState from '../../state/models/productState';

type CreateNewProductState = {
    loading: boolean;
    success: boolean;
    product: ProductState | undefined;
    errorMessage: string;
};

const initialState = {
    loading: false,
    success: false,
    product: undefined,
    errorMessage: '',
};

const createNewProductReducer = (
    state: CreateNewProductState | undefined = initialState,
    action: ProductActions,
): CreateNewProductState => {
    switch (action.type) {
        case CREATE_NEW_PRODUCT_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case CREATE_NEW_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                success: true,
                product: action.payload,
            };
        }
        case CREATE_NEW_PRODUCT_FAIL: {
            return {
                ...state,
                loading: false,
                errorMessage: action.payload.errorMessage,
            };
        }
        case CREATE_NEW_PRODUCT_RESET: {
            return {
                ...state,
                success: false,
            };
        }
        case CLEAR_PRODUCT_ERRORS: {
            return {
                ...state,
                errorMessage: '',
            };
        }
        default: {
            return state;
        }
    }
};

export type { CreateNewProductState };
export default createNewProductReducer;
