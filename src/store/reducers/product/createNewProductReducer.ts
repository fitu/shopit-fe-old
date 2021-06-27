import {
    CREATE_NEW_PRODUCT_REQUEST,
    CREATE_NEW_PRODUCT_SUCCESS,
    CREATE_NEW_PRODUCT_RESET,
} from '../../actions/product/actions/createNewProductActions';
import { ProductActions } from '../../actions/product/productAction';
import Product from '../../state/models/Product';

type CreateNewProductState = {
    loading: boolean;
    success: boolean;
    product: Product | undefined;
};

const INITIAL_STATE = {
    loading: false,
    success: false,
    product: undefined,
};

const createNewProductReducer = (
    state: CreateNewProductState | undefined = INITIAL_STATE,
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
        case CREATE_NEW_PRODUCT_RESET: {
            return {
                ...state,
                success: false,
            };
        }
        default: {
            return state;
        }
    }
};

export type { CreateNewProductState };
export default createNewProductReducer;
