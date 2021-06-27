import {
    REQUEST_CREATE_NEW_PRODUCT,
    REQUEST_CREATE_NEW_PRODUCT_FINISHED,
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
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_CREATE_NEW_PRODUCT: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_CREATE_NEW_PRODUCT_FINISHED: {
            return {
                ...state,
                loading: false,
                success: true,
                product: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export type { CreateNewProductState };
export default createNewProductReducer;
