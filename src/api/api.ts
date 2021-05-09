import { login, register, logoutUser } from './auth/authApi';
import { addItemToCart } from './cart/cartApi';
import { createOrder, myOrders, getOrderDetails, getAllOrders, updateOrder, deleteOrder } from './order/orderApi';
import { processPayment } from './payment/paymentApi';
import {
    getProducts,
    getProductDetails,
    getAdminProducts,
    newProduct,
    deleteProduct,
    updateProduct,
    getProductReviews,
} from './product/productApi';
import { newReview, deleteReview } from './review/reviewApi';
import { getStripeApi } from './thirdParty/stripeApi';
import {
    loadUser,
    updateProfile,
    updatePassword,
    forgotPassword,
    resetPassword,
    getAllUsers,
    getUserDetails,
    updateUser,
    deleteUser,
} from './user/userApi';

export {
    login,
    register,
    loadUser,
    logoutUser,
    updateProfile,
    updatePassword,
    forgotPassword,
    resetPassword,
    getAllUsers,
    getUserDetails,
    updateUser,
    deleteUser,
    addItemToCart,
    createOrder,
    myOrders,
    getOrderDetails,
    getAllOrders,
    updateOrder,
    deleteOrder,
    getProducts,
    getProductDetails,
    newReview,
    getAdminProducts,
    newProduct,
    deleteProduct,
    updateProduct,
    getProductReviews,
    deleteReview,
    getStripeApi,
    processPayment,
};
