import axios from 'axios';

export function login(email, password) {
    const config = { headers: { 'Content-type': 'application/json' } };
    return axios.post('/api/v1/login', { email, password }, config);
}

export function register(userData) {
    const config = { headers: { 'Content-type': 'multipart/from-data' } };
    return axios.post('/api/v1/register', userData, config);
}

export function loadUser() {
    return axios.get('/api/v1/me');
}

export function logoutUser() {
    return axios.get('/api/v1/logout');
}

export function updateProfile(userData) {
    const config = { headers: { 'Content-type': 'multipart/from-data' } };
    return axios.put('/api/v1/me/update', userData, config);
}

export function updatePassword(passwords) {
    const config = { headers: { 'Content-type': 'application/json' } };
    return axios.put('/api/v1/password/update', passwords, config);
}

export function forgotPassword(email) {
    const config = { headers: { 'Content-type': 'application/json' } };
    return axios.post('/api/v1/password/forgot', email, config);
}

export function resetPassword(token, passwords) {
    const config = { headers: { 'Content-type': 'application/json' } };
    return axios.put(`/api/v1/password/reset/${token}`, passwords, config);
}

export function getAllUsers() {
    return axios.get('/api/v1/admin/users');
}

export function getUserDetails(id) {
    return axios.get(`/api/v1/admin/user/${id}`);
}

export function updateUser(id, userData) {
    const config = { headers: { 'Content-type': 'application/json' } };
    return axios.put(`/api/v1/admin/user/${id}`, userData, config);
}

export function deleteUser(id) {
    return axios.delete(`/api/v1/admin/user/${id}`);
}

export function addItemToCart(id) {
    return axios.get(`/api/v1/product/${id}`);
}

export function createOrder(order) {
    const config = { headers: { 'Content-Type': 'application/json' } };
    return axios.post('/api/v1/order/new', order, config);
}

export function myOrders() {
    return axios.get('/api/v1/orders/me');
}

export function getOrderDetails(id) {
    return axios.get(`/api/v1/order/${id}`);
}

export function getAllOrders() {
    return axios.get(`/api/v1/admin/orders`);
}

export function updateOrder(id, orderData) {
    const config = { headers: { 'Content-Type': 'application/json' } };
    return axios.put(`/api/v1/admin/order/${id}`, orderData, config);
}

export function deleteOrder(id) {
    return axios.delete(`/api/v1/admin/order/${id}`);
}

export function getProducts(keyword, currentPage, minPrice, maxPrice) {
    const link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[lte]=${maxPrice}&price[gte]=${minPrice}`;
    return axios.get(link);
}

export function getProductDetails(id) {
    return axios.get(`/api/v1/product/${id}`);
}

export function newReview(reviewData) {
    const config = { headers: { 'Content-Type': 'application/json' } };
    return axios.put('/api/v1/review', reviewData, config);
}

export function getAdminProducts() {
    return axios.get('/api/v1/admin/products');
}

export function newProduct(productData) {
    const config = { headers: { 'Content-Type': 'application/json' } };
    return axios.post('/api/v1/admin/product/new', productData, config);
}

export function deleteProduct(id) {
    return axios.delete(`/api/v1/admin/product/${id}`);
}

export function updateProduct(id, productData) {
    const config = { headers: { 'Content-Type': 'application/json' } };
    return axios.put(`/api/v1/admin/product/${id}`, productData, config);
}

export function getProductReviews(id) {
    return axios.get(`/api/v1/reviews?id=${id}`);
}

export function deleteReview(id, productId) {
    return axios.delete(`/api/v1/reviews?id=${id}&productId=${productId}`);
}

export function getStripeApi() {
    return axios.get('api/v1/stripeapi');
}

export function processPayment(paymentData) {
    const config = { headers: { 'Content-Type': 'application/json' } };
    return axios.post('/api/v1/payment/process', paymentData, config);
}
