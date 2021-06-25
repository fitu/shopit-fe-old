import { CLEAR_PRODUCT_ERRORS } from '../../actions/product/actions/clearProductErrorsActions';
import {
    GET_ADMIN_PRODUCTS_REQUEST,
    GET_ADMIN_PRODUCTS_SUCCESS,
    GET_ADMIN_PRODUCTS_FAIL,
} from '../../actions/product/actions/getAdminProductsActions';
import {
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAIL,
} from '../../actions/product/actions/getAllProductsActions';
import { ProductActions } from '../../actions/product/productAction';
import Product from '../../state/models/Product';

type ProductState = {
    loading: boolean;
    productsCount: number;
    products: Array<Product>;
    errorMessage: string;
};

const initialState = {
    loading: false,
    productsCount: 0,
    products: [],
    errorMessage: '',
};

const productsReducer = (state: ProductState | undefined = initialState, action: ProductActions): ProductState => {
    switch (action.type) {
        case GET_ALL_PRODUCTS_REQUEST:
        case GET_ADMIN_PRODUCTS_REQUEST: {
            return {
                ...state,
                loading: true,
                products: [],
            };
        }
        case GET_ALL_PRODUCTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
            };
        }
        case GET_ADMIN_PRODUCTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                products: action.payload,
            };
        }
        case GET_ALL_PRODUCTS_FAIL:
        case GET_ADMIN_PRODUCTS_FAIL: {
            return {
                ...state,
                loading: false,
                products: [],
                errorMessage: action.payload.errorMessage,
            };
        }
        case CLEAR_PRODUCT_ERRORS: {
            return {
                ...state,
                products: [],
                errorMessage: '',
            };
        }
        default: {
            return state;
        }
    }
};

export type { ProductState };
export default productsReducer;
