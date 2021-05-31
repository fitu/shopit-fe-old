import axios from 'axios';

import { BASE_URI_VERSION, baseHeaders } from '../apiConfig';

const createOrder = (order: any) => axios.post(`${BASE_URI_VERSION}/order/new`, order, baseHeaders);

const myOrders = () => axios.get(`${BASE_URI_VERSION}/orders/me`);

const getOrderDetails = (id: string) => axios.get(`${BASE_URI_VERSION}/order/${id}`);

const getAllOrders = () => axios.get(`${BASE_URI_VERSION}/admin/orders`);

const updateOrder = (id: string, orderData: any) =>
    axios.put(`${BASE_URI_VERSION}/admin/order/${id}`, orderData, baseHeaders);

const deleteOrder = (id: string) => axios.delete(`${BASE_URI_VERSION}/admin/order/${id}`);

export { createOrder, myOrders, getOrderDetails, getAllOrders, updateOrder, deleteOrder };
