import {
    ADMIN_PRODUCTS_FAIL,
    ADMIN_PRODUCTS_REQUEST,
    ADMIN_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    CLEAR_ERRORS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_RESET,
    DELETE_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_RESET,
    NEW_PRODUCT_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_RESET,
    NEW_REVIEW_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_RESET,
    UPDATE_PRODUCT_SUCCESS,
} from '../actions/productAction';

export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
        case ADMIN_PRODUCTS_REQUEST: {
            return {
                loading: true,
                products: [],
            };
        }
        case ALL_PRODUCTS_SUCCESS: {
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productCount,
                resultsPerPage: action.payload.resultsPerPage,
            };
        }
        case ADMIN_PRODUCTS_SUCCESS: {
            return {
                loading: false,
                products: action.payload,
            };
        }
        case ALL_PRODUCTS_FAIL:
        case ADMIN_PRODUCTS_FAIL: {
            return {
                loading: false,
                error: action.payload,
            };
        }
        case CLEAR_ERRORS: {
            return {
                ...state,
                error: null,
            };
        }
        default: {
            return state;
        }
    }
};

export const productDetailReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case PRODUCT_DETAILS_SUCCESS: {
            return {
                loading: false,
                product: action.payload,
            };
        }
        case PRODUCT_DETAILS_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case CLEAR_ERRORS: {
            return {
                ...state,
                error: null,
            };
        }
        default: {
            return state;
        }
    }
};

export const newReviewReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case NEW_REVIEW_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case NEW_REVIEW_SUCCESS: {
            return {
                loading: false,
                success: action.payload,
            };
        }
        case NEW_REVIEW_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case NEW_REVIEW_RESET: {
            return {
                ...state,
                success: false,
            };
        }
        case CLEAR_ERRORS: {
            return {
                ...state,
                error: null,
            };
        }
        default: {
            return state;
        }
    }
};

export const newProductReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case NEW_PRODUCT_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case NEW_PRODUCT_SUCCESS: {
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.product,
            };
        }
        case NEW_PRODUCT_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case NEW_PRODUCT_RESET: {
            return {
                ...state,
                success: false,
            };
        }
        case CLEAR_ERRORS: {
            return {
                ...state,
                error: null,
            };
        }
        default: {
            return state;
        }
    }
};

export const productReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
        case UPDATE_PRODUCT_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case DELETE_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };
        }
        case UPDATE_PRODUCT_SUCCESS: {
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        }
        case DELETE_PRODUCT_FAIL:
        case UPDATE_PRODUCT_FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }
        case DELETE_PRODUCT_RESET: {
            return {
                ...state,
                isDeleted: false,
            };
        }
        case UPDATE_PRODUCT_RESET: {
            return {
                ...state,
                isUpdated: false,
            };
        }
        case CLEAR_ERRORS: {
            return {
                ...state,
                error: null,
            };
        }
        default: {
            return state;
        }
    }
};