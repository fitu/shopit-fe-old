import {
    GET_PRODUCT_DETAILS_REQUEST,
    GET_PRODUCT_DETAILS_SUCCESS,
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
    switch (action.type) {
        case GET_PRODUCT_DETAILS_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case GET_PRODUCT_DETAILS_SUCCESS: {
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
