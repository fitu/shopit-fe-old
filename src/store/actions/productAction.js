import {
    deleteProduct as apiDeleteProduct,
    deleteReview as apiDeleteReview,
    getAdminProducts as apiGetAdminProducts,
    getProductDetails as apiGetProductDetails,
    getProductReviews as apiGetProdutReviews,
    getProducts as apiGetProducts,
    newProduct as apiNewProduct,
    newReview as apiNewReview,
    updateProduct as apiUpdateProduct,
} from '../../api/api';

const CLEAR_ERRORS = 'CLEAR_ERRORS';

const ADMIN_PRODUCTS_FAIL = 'ADMIN_PRODUCTS_FAIL';
const ADMIN_PRODUCTS_REQUEST = 'ADMIN_PRODUCTS_REQUEST';
const ADMIN_PRODUCTS_SUCCESS = 'ADMIN_PRODUCTS_SUCCESS';

const ALL_PRODUCTS_FAIL = 'ALL_PRODUCTS_FAIL';
const ALL_PRODUCTS_REQUEST = 'ALL_PRODUCTS_REQUEST';
const ALL_PRODUCTS_SUCCESS = 'ALL_PRODUCTS_SUCCESS';

const ALL_REVIEWS_FAIL = 'ALL_REVIEWS_FAIL';
const ALL_REVIEWS_REQUEST = 'ALL_REVIEWS_REQUEST';
const ALL_REVIEWS_SUCCESS = 'ALL_REVIEWS_SUCCESS';

const DELETE_PRODUCT_FAIL = 'DELETE_PRODUCT_FAIL';
const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
const DELETE_PRODUCT_RESET = 'DELETE_PRODUCT_RESET';
const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';

const DELETE_REVIEW_FAIL = 'DELETE_REVIEW_FAIL';
const DELETE_REVIEW_REQUEST = 'DELETE_REVIEW_REQUEST';
const DELETE_REVIEW_RESET = 'DELETE_REVIEW_RESET';
const DELETE_REVIEW_SUCCESS = 'DELETE_REVIEW_SUCCESS';

const NEW_PRODUCT_FAIL = 'NEW_PRODUCT_FAIL';
const NEW_PRODUCT_REQUEST = 'NEW_PRODUCT_REQUEST';
const NEW_PRODUCT_RESET = 'NEW_PRODUCT_RESET';
const NEW_PRODUCT_SUCCESS = 'NEW_PRODUCT_SUCCESS';

const NEW_REVIEW_FAIL = 'NEW_REVIEW_FAIL';
const NEW_REVIEW_REQUEST = 'NEW_REVIEW_REQUEST';
const NEW_REVIEW_RESET = 'NEW_REVIEW_RESET';
const NEW_REVIEW_SUCCESS = 'NEW_REVIEW_SUCCESS';

const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL';
const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST';
const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS';

const UPDATE_PRODUCT_FAIL = 'UPDATE_PRODUCT_FAIL';
const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST';
const UPDATE_PRODUCT_RESET = 'UPDATE_PRODUCT_RESET';
const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';

const getProducts = (keyword = '', price, currentPage = 1) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ALL_PRODUCTS_REQUEST });
            const minPrice = price[0];
            const maxPrice = price[1];
            const { data } = await apiGetProducts(keyword, currentPage, minPrice, maxPrice);
            dispatch({
                type: ALL_PRODUCTS_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: ALL_PRODUCTS_FAIL,
                payload: error.response.data.message,
            });
        }
    };
};

const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });
        const { data } = await apiGetProductDetails(id);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

const newReview = (reviewData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_REVIEW_REQUEST });
        const { data } = await apiNewReview(reviewData);
        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response.data.message,
        });
    }
};

const newReviewReset = () => (dispatch) => {
    dispatch({ type: NEW_REVIEW_RESET });
};

const getAdminProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCTS_REQUEST });
        const { data } = await apiGetAdminProducts();
        dispatch({
            type: ADMIN_PRODUCTS_SUCCESS,
            payload: data.products,
        });
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCTS_FAIL,
            payload: error.response.data.message,
        });
    }
};

const newProduct = (productData) => async (dispatch) => {
    try {
        dispatch({ type: NEW_PRODUCT_REQUEST });
        const { data } = await apiNewProduct(productData);
        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });
        const { data } = await apiDeleteProduct(id);
        dispatch({
            type: DELETE_PRODUCT_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

const updateProduct = (id, productData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });
        const { data } = await apiUpdateProduct(id, productData);
        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

const getProductReviews = (id) => async (dispatch) => {
    try {
        dispatch({ type: ALL_REVIEWS_REQUEST });
        const { data } = await apiGetProdutReviews(id);
        dispatch({
            type: ALL_REVIEWS_SUCCESS,
            payload: data.reviews,
        });
    } catch (error) {
        dispatch({
            type: ALL_REVIEWS_FAIL,
            payload: error.response.data.message,
        });
    }
};

const deleteReview = (id, productId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_REVIEW_REQUEST });
        const { data } = await apiDeleteReview(id, productId);
        dispatch({
            type: DELETE_REVIEW_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_REVIEW_FAIL,
            payload: error.response.data.message,
        });
    }
};

const updateProductReset = () => async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT_RESET });
};

const deleteReviewReset = () => async (dispatch) => {
    dispatch({ type: DELETE_REVIEW_RESET });
};

const deleteProductReset = () => async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_RESET });
};

const newProductReset = () => async (dispatch) => {
    dispatch({ type: NEW_PRODUCT_RESET });
};

const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};

export {
    CLEAR_ERRORS,
    ADMIN_PRODUCTS_FAIL,
    ADMIN_PRODUCTS_REQUEST,
    ADMIN_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_REVIEWS_FAIL,
    ALL_REVIEWS_REQUEST,
    ALL_REVIEWS_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_RESET,
    DELETE_PRODUCT_SUCCESS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_RESET,
    DELETE_REVIEW_SUCCESS,
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
    getProducts,
    getProductDetails,
    newReview,
    newReviewReset,
    getAdminProducts,
    newProduct,
    deleteProduct,
    updateProduct,
    getProductReviews,
    deleteReview,
    updateProductReset,
    deleteReviewReset,
    deleteProductReset,
    newProductReset,
    clearErrors,
};
