import {
    createOrder as apiCreateOrder,
    deleteOrder as apiDeleteOrder,
    getAllOrders as apiGetAllOrders,
    getOrderDetails as apiGetOrderDetails,
    myOrders as apiMyOrders,
    updateOrder as apiUpdateOrder,
} from '../../api/api';

const ALL_ORDERS_FAIL = 'ALL_ORDERS_FAIL';
const ALL_ORDERS_REQUEST = 'ALL_ORDERS_REQUEST';
const ALL_ORDERS_SUCCESS = 'ALL_ORDERS_SUCCESS';

const CLEAR_ERRORS = 'CLEAR_ERRORS';
const CLEAR_CART = 'CLEAR_CART';

const CREATE_ORDER_FAIL = 'CREATE_ORDER_FAIL';
const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST';
const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS';

const DELETE_ORDER_FAIL = 'DELETE_ORDER_FAIL';
const DELETE_ORDER_REQUEST = 'DELETE_ORDER_REQUEST';
const DELETE_ORDER_RESET = 'DELETE_ORDER_RESET';
const DELETE_ORDER_SUCCESS = 'DELETE_ORDER_SUCCESS';

const MY_ORDERS_FAIL = 'MY_ORDERS_FAIL';
const MY_ORDERS_REQUEST = 'MY_ORDERS_REQUEST';
const MY_ORDERS_SUCCESS = 'MY_ORDERS_SUCCESS';

const ORDER_DETAILS_FAIL = 'ORDER_DETAILS_FAIL';
const ORDER_DETAILS_REQUEST = 'ORDER_DETAILS_REQUEST';
const ORDER_DETAILS_SUCCESS = 'ORDER_DETAILS_SUCCESS';

const UPDATE_ORDER_FAIL = 'UPDATE_ORDER_FAIL';
const UPDATE_ORDER_REQUEST = 'UPDATE_ORDER_REQUEST';
const UPDATE_ORDER_RESET = 'UPDATE_ORDER_RESET';
const UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS';

const createOrder = (order) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_ORDER_REQUEST });
        const { data } = await apiCreateOrder(order);
        dispatch({
            type: CREATE_ORDER_SUCCESS,
            payload: data,
        });
        dispatch({type: CLEAR_CART});
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAIL, payload: error.response.data.message });
    }
};

const myOrders = () => async (dispatch) => {
    try {
        dispatch({ type: MY_ORDERS_REQUEST });
        const { data } = await apiMyOrders();
        dispatch({ type: MY_ORDERS_SUCCESS, payload: data.orders });
    } catch (error) {
        dispatch({ type: MY_ORDERS_FAIL, payload: error.response.data.message });
    }
};

const getOrderDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST });
        const { data } = await apiGetOrderDetails(id);
        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
    } catch (error) {
        dispatch({ type: ORDER_DETAILS_FAIL, payload: error.response.data.message });
    }
};

const getAllOrders = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_ORDERS_REQUEST });
        const { data } = await apiGetAllOrders();
        dispatch({ type: ALL_ORDERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ALL_ORDERS_FAIL, payload: error.response.data.message });
    }
};

const updateOrder = (id, orderData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_ORDER_REQUEST });
        const { data } = await apiUpdateOrder(id, orderData);
        dispatch({
            type: UPDATE_ORDER_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_ORDER_FAIL,
            payload: error.response.data.message,
        });
    }
};

const deleteOrder = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_ORDER_REQUEST });
        const { data } = await apiDeleteOrder(id);
        dispatch({
            type: DELETE_ORDER_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: DELETE_ORDER_FAIL,
            payload: error.response.data.message,
        });
    }
};

const deleteOrderReset = () => async (dispatch) => {
    dispatch({ type: DELETE_ORDER_RESET });
};

const updateOrderReset = () => async (dispatch) => {
    dispatch({ type: UPDATE_ORDER_RESET });
};

const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};

export {
    ALL_ORDERS_FAIL,
    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    CLEAR_ERRORS,
    CLEAR_CART,
    CREATE_ORDER_FAIL,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_RESET,
    DELETE_ORDER_SUCCESS,
    MY_ORDERS_FAIL,
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    UPDATE_ORDER_FAIL,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_RESET,
    UPDATE_ORDER_SUCCESS,
    createOrder,
    myOrders,
    getOrderDetails,
    getAllOrders,
    updateOrder,
    deleteOrder,
    deleteOrderReset,
    updateOrderReset,
    clearErrors,
};
