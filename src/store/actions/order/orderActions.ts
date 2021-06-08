import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import {
    createOrder as apiCreateOrder,
    deleteOrder as apiDeleteOrder,
    getAllOrders as apiGetAllOrders,
    getOrderDetails as apiGetOrderDetails,
    getMyOrders as apiGetMyOrders,
    updateOrder as apiUpdateOrder,
} from '../../../api/api';
import OrderApi from '../../../api/models/orderApi';
import { StoreState } from '../../state/storeState';
import { ClearOrderErrors, CLEAR_ORDER_ERRORS } from './actions/clearOrderErrorActions';
import {
    CreateOrderRequest,
    CreateOrderSuccess,
    CreateOrderFail,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
} from './actions/createOrderActions';
import {
    DeleteOrderRequest,
    DeleteOrderSuccess,
    DeleteOrderReset,
    DeleteOrderFail,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_RESET,
    DELETE_ORDER_FAIL,
} from './actions/deleteOrderActions';
import {
    GetAllOrdersRequest,
    GetAllOrdersSuccess,
    GetAllOrdersFail,
    GET_ALL_ORDERS_REQUEST,
    GET_ALL_ORDERS_SUCCESS,
    GET_ALL_ORDERS_FAIL,
} from './actions/getAllOrdersActions';
import {
    GetMyOrdersRequest,
    GetMyOrdersSuccess,
    GetMyOrdersFail,
    GET_MY_ORDERS_REQUEST,
    GET_MY_ORDERS_SUCCESS,
    GET_MY_ORDERS_FAIL,
} from './actions/getMyOrdersActions';
import {
    GetOrderDetailsRequest,
    GetOrderDetailsSuccess,
    GetOrderDetailsFail,
    GET_ORDER_DETAILS_REQUEST,
    GET_ORDER_DETAILS_SUCCESS,
    GET_ORDER_DETAILS_FAIL,
} from './actions/getOrderDetailsActions';
import {
    UpdateOrderRequest,
    UpdateOrderSuccess,
    UpdateOrderReset,
    UpdateOrderFail,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_RESET,
    UPDATE_ORDER_FAIL,
} from './actions/updateOrderActions';

type CreateOrderActions = CreateOrderRequest | CreateOrderSuccess | CreateOrderFail;
type GetMyOrdersActions = GetMyOrdersRequest | GetMyOrdersSuccess | GetMyOrdersFail;
type GetOrderDetailsActions = GetOrderDetailsRequest | GetOrderDetailsSuccess | GetOrderDetailsFail;
type GetAllOrdersActions = GetAllOrdersRequest | GetAllOrdersSuccess | GetAllOrdersFail;
type UpdateOrderActions = UpdateOrderRequest | UpdateOrderSuccess | UpdateOrderFail;
type DeleteOrderActions = DeleteOrderRequest | DeleteOrderSuccess | DeleteOrderFail;

type OrderActions =
    | CreateOrderActions
    | GetMyOrdersActions
    | GetOrderDetailsActions
    | GetAllOrdersActions
    | UpdateOrderActions
    | DeleteOrderActions
    | UpdateOrderReset
    | DeleteOrderReset
    | ClearOrderErrors;

const createOrder: ActionCreator<ThunkAction<Promise<void>, StoreState, void, CreateOrderActions>> =
    (order) => async (dispatch: ThunkDispatch<StoreState, void, CreateOrderActions>) => {
        try {
            dispatch({ type: CREATE_ORDER_REQUEST });
            const response = await apiCreateOrder(order);
            dispatch({
                type: CREATE_ORDER_SUCCESS,
                payload: OrderApi.toState(response.order),
            });
        } catch (error) {
            dispatch({ type: CREATE_ORDER_FAIL, payload: { errorMessage: error.message } });
        }
    };

const myOrders: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetMyOrdersActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, GetMyOrdersActions>) => {
        try {
            dispatch({ type: GET_MY_ORDERS_REQUEST });
            const response = await apiGetMyOrders();
            dispatch({ type: GET_MY_ORDERS_SUCCESS, payload: response.orders.map((order) => OrderApi.toState(order)) });
        } catch (error) {
            dispatch({ type: GET_MY_ORDERS_FAIL, payload: { errorMessage: error.message } });
        }
    };

const getOrderDetails: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetOrderDetailsActions>> =
    (id) => async (dispatch: ThunkDispatch<StoreState, void, GetOrderDetailsActions>) => {
        try {
            dispatch({ type: GET_ORDER_DETAILS_REQUEST });
            const response = await apiGetOrderDetails(id);
            dispatch({ type: GET_ORDER_DETAILS_SUCCESS, payload: OrderApi.toState(response.order) });
        } catch (error) {
            dispatch({ type: GET_ORDER_DETAILS_FAIL, payload: { errorMessage: error.message } });
        }
    };

const getAllOrders: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetAllOrdersActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, GetAllOrdersActions>) => {
        try {
            dispatch({ type: GET_ALL_ORDERS_REQUEST });
            const response = await apiGetAllOrders();
            dispatch({
                type: GET_ALL_ORDERS_SUCCESS,
                payload: {
                    orders: response.orders.map((order) => OrderApi.toState(order)),
                    totalAmount: response.totalAmount,
                },
            });
        } catch (error) {
            dispatch({ type: GET_ALL_ORDERS_FAIL, payload: { errorMessage: error.message } });
        }
    };

const updateOrder: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdateOrderActions>> =
    (id, orderData) => async (dispatch: ThunkDispatch<StoreState, void, UpdateOrderActions>) => {
        try {
            dispatch({ type: UPDATE_ORDER_REQUEST });
            await apiUpdateOrder(id, orderData);
            dispatch({
                type: UPDATE_ORDER_SUCCESS,
            });
        } catch (error) {
            dispatch({
                type: UPDATE_ORDER_FAIL,
                payload: { errorMessage: error.message },
            });
        }
    };

const deleteOrder: ActionCreator<ThunkAction<Promise<void>, StoreState, void, DeleteOrderActions>> =
    (id) => async (dispatch: ThunkDispatch<StoreState, void, DeleteOrderActions>) => {
        try {
            dispatch({ type: DELETE_ORDER_REQUEST });
            await apiDeleteOrder(id);
            dispatch({
                type: DELETE_ORDER_SUCCESS,
            });
        } catch (error) {
            dispatch({
                type: DELETE_ORDER_FAIL,
                payload: { errorMessage: error.message },
            });
        }
    };

const updateOrderReset: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdateOrderReset>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, UpdateOrderReset>) => {
        dispatch({ type: UPDATE_ORDER_RESET });
    };
const deleteOrderReset: ActionCreator<ThunkAction<Promise<void>, StoreState, void, DeleteOrderReset>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, DeleteOrderReset>) => {
        dispatch({ type: DELETE_ORDER_RESET });
    };

const clearErrors: ActionCreator<ThunkAction<Promise<void>, StoreState, void, ClearOrderErrors>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, ClearOrderErrors>) => {
        dispatch({ type: CLEAR_ORDER_ERRORS });
    };

export type { OrderActions };
export {
    createOrder,
    myOrders,
    getOrderDetails,
    getAllOrders,
    updateOrder,
    deleteOrder,
    updateOrderReset,
    deleteOrderReset,
    clearErrors,
};
