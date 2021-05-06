import axios from 'axios';

const BASE_URI_VERSION = '/api/v1';
const baseHeaders = { headers: { 'Content-type': 'application/json' } };

export function login(email, password) {
    return axios.post(`${BASE_URI_VERSION}/login`, { email, password }, baseHeaders);
}

export function register(userData) {
    const customHeaders = { headers: { 'Content-type': 'multipart/from-data' } };
    return axios.post(`${BASE_URI_VERSION}/register`, userData, customHeaders);
}

export function loadUser() {
    return axios.get(`${BASE_URI_VERSION}/me`);
}

export function logoutUser() {
    return axios.get(`${BASE_URI_VERSION}/logout`);
}

export function updateProfile(userData) {
    return axios.put(`${BASE_URI_VERSION}/me/update`, userData, baseHeaders);
}

export function updatePassword(passwords) {
    return axios.put(`${BASE_URI_VERSION}/password/update`, passwords, baseHeaders);
}

export function forgotPassword(email) {
    return axios.post(`${BASE_URI_VERSION}/password/forgot`, email, baseHeaders);
}

export function resetPassword(token, passwords) {
    return axios.put(`${BASE_URI_VERSION}/password/reset/${token}`, passwords, baseHeaders);
}

export function getAllUsers() {
    return axios.get(`${BASE_URI_VERSION}/admin/users`);
}

export function getUserDetails(id) {
    return axios.get(`${BASE_URI_VERSION}/admin/user/${id}`);
}

export function updateUser(id, userData) {
    return axios.put(`${BASE_URI_VERSION}/admin/user/${id}`, userData, baseHeaders);
}

export function deleteUser(id) {
    return axios.delete(`${BASE_URI_VERSION}/admin/user/${id}`);
}

export function addItemToCart(id) {
    return axios.get(`${BASE_URI_VERSION}/product/${id}`);
}

export function createOrder(order) {
    return axios.post(`${BASE_URI_VERSION}/order/new`, order, baseHeaders);
}

export function myOrders() {
    return axios.get(`${BASE_URI_VERSION}/orders/me`);
}

export function getOrderDetails(id) {
    return axios.get(`${BASE_URI_VERSION}/order/${id}`);
}

export function getAllOrders() {
    return axios.get(`${BASE_URI_VERSION}/admin/orders`);
}

export function updateOrder(id, orderData) {
    return axios.put(`${BASE_URI_VERSION}/admin/order/${id}`, orderData, baseHeaders);
}

export function deleteOrder(id) {
    return axios.delete(`${BASE_URI_VERSION}/admin/order/${id}`);
}

export function getProducts(keyword, currentPage, minPrice, maxPrice) {
    const link = `${BASE_URI_VERSION}/products?keyword=${keyword}&page=${currentPage}&price[lte]=${maxPrice}&price[gte]=${minPrice}`;
    return axios.get(link);
}

export function getProductDetails(id) {
    return axios.get(`${BASE_URI_VERSION}/product/${id}`);
}

export function newReview(reviewData) {
    return axios.put(`${BASE_URI_VERSION}/review`, reviewData, baseHeaders);
}

export function getAdminProducts() {
    return axios.get(`${BASE_URI_VERSION}/admin/products`);
}

export function newProduct(productData) {
    return axios.post(`${BASE_URI_VERSION}/admin/product/new`, productData, baseHeaders);
}

export function deleteProduct(id) {
    return axios.delete(`${BASE_URI_VERSION}/admin/product/${id}`);
}

export function updateProduct(id, productData) {
    return axios.put(`${BASE_URI_VERSION}/admin/product/${id}`, productData, baseHeaders);
}

export function getProductReviews(id) {
    return axios.get(`${BASE_URI_VERSION}/reviews?id=${id}`);
}

export function deleteReview(id, productId) {
    return axios.delete(`${BASE_URI_VERSION}/reviews?id=${id}&productId=${productId}`);
}

export function getStripeApi() {
    return axios.get(`${BASE_URI_VERSION}/stripeapi`);
}

export function processPayment(paymentData) {
    return axios.post(`${BASE_URI_VERSION}/payment/process`, paymentData, baseHeaders);
}
