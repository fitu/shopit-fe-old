import axios from 'axios';

import { BASE_URI_VERSION, baseHeaders } from '../apiConfig';
import { handleApiErrors } from '../apiError';

import CreateOrderPayload from './payloads/createOrderPayload';
import UpdateOrderPayload from './payloads/updateOrderPayload';
import CreateOrderResponse from './responses/createOrderResponse';
import GetAllOrdersResponse from './responses/getAllOrdersResponse';
import GetMyOrdersResponse from './responses/getMyOrdersResponse';
import GetOrderResponse from './responses/getOrderResponse';
import UpdateOrderResponse from './responses/updateOrderResponse';

const CREATE_ORDER_URI = `${BASE_URI_VERSION}/order/new`;
const GET_MY_ORDERS_URI = `${BASE_URI_VERSION}/orders/me`;
const GET_ORDER_DETAILS_URI = `${BASE_URI_VERSION}/order`;
const GET_ALL_ORDERS_URI = `${BASE_URI_VERSION}/admin/orders`;
const UPDATE_ORDER_URI = `${BASE_URI_VERSION}/admin/order`;
const DELETE_ORDER_URI = `${BASE_URI_VERSION}/admin/order`;

const createOrder = async (payload: CreateOrderPayload): Promise<CreateOrderResponse> => {
    try {
        const response = await axios.post<CreateOrderResponse>(CREATE_ORDER_URI, payload, baseHeaders);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const getMyOrders = async (): Promise<GetMyOrdersResponse> => {
    try {
        const response = await axios.get<GetMyOrdersResponse>(GET_MY_ORDERS_URI);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const getOrderDetails = async (orderId: string): Promise<GetOrderResponse> => {
    try {
        const response = await axios.get<GetOrderResponse>(`${GET_ORDER_DETAILS_URI}/${orderId}`);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const getAllOrders = async (): Promise<GetAllOrdersResponse> => {
    try {
        const response = await axios.get<GetAllOrdersResponse>(GET_ALL_ORDERS_URI);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const updateOrder = async (orderId: string, payload: UpdateOrderPayload): Promise<UpdateOrderResponse> => {
    try {
        const response = await axios.put<UpdateOrderResponse>(`${UPDATE_ORDER_URI}/${orderId}`, payload, baseHeaders);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

const deleteOrder = async (orderId: string): Promise<void> => {
    try {
        const response = await axios.delete(`${DELETE_ORDER_URI}/${orderId}`);
        return response.data;
    } catch (error) {
        throw handleApiErrors(error);
    }
};

export { createOrder, getMyOrders, getOrderDetails, getAllOrders, updateOrder, deleteOrder };
