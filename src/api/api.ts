import { register, logout } from './auth/authApi';
import { addItemToCart } from './cart/cartApi';
import { createOrder, getMyOrders, getOrderDetails, getAllOrders, updateOrder, deleteOrder } from './order/orderApi';
import { processPayment } from './payment/paymentApi';
import {
    getProducts,
    getProductDetails,
    getAdminProducts,
    createNewProduct,
    deleteProduct,
    updateProduct,
    getProductReviews,
} from './product/productApi';
import { addReviewToProduct, deleteReviewFromProduct } from './review/reviewApi';
import { getStripeApiKey } from './thirdParty/stripeApi';
import {
    getCurrentUser,
    updateProfile,
    updatePassword,
    forgotPassword,
    resetPassword,
    getAllUsers,
    getUserDetails,
    updateUser,
    deleteUser,
} from './user/userApi';

// TODO: delete this module
export {
    register,
    getCurrentUser,
    logout,
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
    getMyOrders,
    getOrderDetails,
    getAllOrders,
    updateOrder,
    deleteOrder,
    getProducts,
    getProductDetails,
    addReviewToProduct,
    getAdminProducts,
    createNewProduct,
    deleteProduct,
    updateProduct,
    getProductReviews,
    deleteReviewFromProduct,
    getStripeApiKey,
    processPayment,
};
