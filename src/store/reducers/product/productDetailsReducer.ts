import {
    REQUEST_GET_PRODUCT_DETAILS,
    REQUEST_GET_PRODUCT_DETAILS_FINISHED,
} from '../../actions/product/actions/getProductDetailsActions';
import { ProductActions } from '../../actions/product/productAction';
import Product from '../../state/models/Product';

type ProductDetailsState = {
    loading: boolean;
    product: Product | undefined;
};

const INITIAL_STATE = {
    loading: false,
    product: undefined,
};

const productDetailsReducer = (
    state: ProductDetailsState | undefined = INITIAL_STATE,
    action: ProductActions,
): ProductDetailsState => {
    if (action.isError) {
        return state;
    }
    Object.freeze(state);

    switch (action.type) {
        case REQUEST_GET_PRODUCT_DETAILS: {
            return {
                ...state,
                loading: true,
            };
        }
        case REQUEST_GET_PRODUCT_DETAILS_FINISHED: {
            return {
                ...state,
                loading: false,
                product: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export type { ProductDetailsState };
export default productDetailsReducer;
