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
import {
    RequestCreateOrder,
    RequestCreateOrderFinished,
    REQUEST_CREATE_ORDER,
    REQUEST_CREATE_ORDER_FINISHED,
} from './actions/createOrderActions';
import {
    RequestDeleteOrder,
    RequestDeleteOrderFinished,
    REQUEST_DELETE_ORDER,
    REQUEST_DELETE_ORDER_FINISHED,
} from './actions/deleteOrderActions';
import {
    RequestGetAllOrders,
    RequestGetAllOrdersFinished,
    REQUEST_GET_ALL_ORDERS,
    REQUEST_GET_ALL_ORDERS_FINISHED,
} from './actions/getAllOrdersActions';
import {
    RequestGetMyOrders,
    RequestGetMyOrdersFinished,
    REQUEST_GET_MY_ORDERS,
    REQUEST_GET_MY_ORDERS_FINISHED,
} from './actions/getMyOrdersActions';
import {
    RequestGetOrderDetails,
    RequestGetOrderDetailsFinished,
    REQUEST_GET_ORDER_DETAILS,
    REQUEST_GET_ORDER_DETAILS_FINISHED,
} from './actions/getOrderDetailsActions';
import {
    RequestUpdateOrder,
    RequestUpdateOrderFinished,
    REQUEST_UPDATE_ORDER,
    REQUEST_UPDATE_ORDER_FINISHED,
} from './actions/updateOrderActions';

type CreateOrderActions = RequestCreateOrder | RequestCreateOrderFinished;
type GetMyOrdersActions = RequestGetMyOrders | RequestGetMyOrdersFinished;
type GetOrderDetailsActions = RequestGetOrderDetails | RequestGetOrderDetailsFinished;
type GetAllOrdersActions = RequestGetAllOrders | RequestGetAllOrdersFinished;
type UpdateOrderActions = RequestUpdateOrder | RequestUpdateOrderFinished;
type DeleteOrderActions = RequestDeleteOrder | RequestDeleteOrderFinished;

type OrderActions =
    | CreateOrderActions
    | GetMyOrdersActions
    | GetOrderDetailsActions
    | GetAllOrdersActions
    | UpdateOrderActions
    | DeleteOrderActions;

const createOrder: ActionCreator<ThunkAction<Promise<void>, StoreState, void, CreateOrderActions>> =
    (order) => async (dispatch: ThunkDispatch<StoreState, void, CreateOrderActions>) => {
        try {
            dispatch({ type: REQUEST_CREATE_ORDER });
            const response = await apiCreateOrder(order);
            dispatch({
                type: REQUEST_CREATE_ORDER_FINISHED,
                payload: OrderApi.toState(response.order),
            });
        } catch (error) {
            dispatch({ type: REQUEST_CREATE_ORDER_FINISHED, error: { message: error.message }, isError: true });
        }
    };

const myOrders: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetMyOrdersActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, GetMyOrdersActions>) => {
        try {
            dispatch({ type: REQUEST_GET_MY_ORDERS });
            const response = await apiGetMyOrders();
            dispatch({
                type: REQUEST_GET_MY_ORDERS_FINISHED,
                payload: response.orders.map((order) => OrderApi.toState(order)),
                
            });
            
        } catch (error) {
            dispatch({ type: REQUEST_GET_MY_ORDERS_FINISHED, error: { message: error.message }, isError: true });
        }
    };

const getOrderDetails: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetOrderDetailsActions>> =
    (id) => async (dispatch: ThunkDispatch<StoreState, void, GetOrderDetailsActions>) => {
        try {
            dispatch({ type: REQUEST_GET_ORDER_DETAILS });
            const response = await apiGetOrderDetails(id);
            dispatch({ type: REQUEST_GET_ORDER_DETAILS_FINISHED, payload: OrderApi.toState(response.order) });
        } catch (error) {
            dispatch({ type: REQUEST_GET_ORDER_DETAILS_FINISHED, error: { message: error.message }, isError: true });
        }
    };

const getAllOrders: ActionCreator<ThunkAction<Promise<void>, StoreState, void, GetAllOrdersActions>> =
    () => async (dispatch: ThunkDispatch<StoreState, void, GetAllOrdersActions>) => {
        try {
            dispatch({ type: REQUEST_GET_ALL_ORDERS });
            const response = await apiGetAllOrders();
            dispatch({
                type: REQUEST_GET_ALL_ORDERS_FINISHED,
                payload: {
                    orders: response.orders.map((order) => OrderApi.toState(order)),
                    totalAmount: response.totalAmount,
                },
            });
        } catch (error) {
            dispatch({ type: REQUEST_GET_ALL_ORDERS_FINISHED, error: { message: error.message }, isError: true });
        }
    };

const updateOrder: ActionCreator<ThunkAction<Promise<void>, StoreState, void, UpdateOrderActions>> =
    (id, orderData) => async (dispatch: ThunkDispatch<StoreState, void, UpdateOrderActions>) => {
        try {
            dispatch({ type: REQUEST_UPDATE_ORDER });
            await apiUpdateOrder(id, orderData);
            dispatch({
                type: REQUEST_UPDATE_ORDER_FINISHED,
            });
        } catch (error) {
            dispatch({
                type: REQUEST_UPDATE_ORDER_FINISHED,
                error: { message: error.message },
                isError: true,
            });
        }
    };

const deleteOrder: ActionCreator<ThunkAction<Promise<void>, StoreState, void, DeleteOrderActions>> =
    (id) => async (dispatch: ThunkDispatch<StoreState, void, DeleteOrderActions>) => {
        try {
            dispatch({ type: REQUEST_DELETE_ORDER });
            await apiDeleteOrder(id);
            dispatch({
                type: REQUEST_DELETE_ORDER_FINISHED,
            });
        } catch (error) {
            dispatch({
                type: REQUEST_DELETE_ORDER_FINISHED,
                error: { message: error.message },
                isError: true,
            });
        }
    };

export type { OrderActions };
export { createOrder, myOrders, getOrderDetails, getAllOrders, updateOrder, deleteOrder };
