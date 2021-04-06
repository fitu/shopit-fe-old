import axios from 'axios';

export const ALL_PRODUCTS_REQUEST = 'ALL_PRODUCTS_REQUEST';
export const ALL_PRODUCTS_SUCCESS = 'ALL_PRODUCTS_SUCCESS';
export const ALL_PRODUCTS_FAIL = 'ALL_PRODUCTS_FAIL';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const PRODUCT_DETAILS_REQUEST = 'PRODUCT_DETAILS_REQUEST';
export const PRODUCT_DETAILS_SUCCESS = 'PRODUCT_DETAILS_SUCCESS';
export const PRODUCT_DETAILS_FAIL = 'PRODUCT_DETAILS_FAIL';

export const NEW_REVIEW_REQUEST = 'NEW_REVIEW_REQUEST';
export const NEW_REVIEW_SUCCESS = 'NEW_REVIEW_SUCCESS';
export const NEW_REVIEW_FAIL = 'NEW_REVIEW_FAIL';
export const NEW_REVIEW_RESET = 'NEW_REVIEW_RESET';

export const getProducts = (keyword = '', price, currentPage = 1) => async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCTS_REQUEST,
        });
        const link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${price[1]}&price[gte]=${price[0]}`;
        const { data } = await axios.get(link);
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

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST,
        });
        const { data } = await axios.get(`/api/v1/product/${id}`);
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

export const newReview = (reviewData) => async (dispatch) => {
    try {
        dispatch({
            type: NEW_REVIEW_REQUEST,
        });
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const { data } = await axios.put('/api/v1/review', reviewData, config);
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

export const newReviewReset = () => (dispatch) => {
    dispatch({ type: NEW_REVIEW_RESET });
};

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS,
    });
};
