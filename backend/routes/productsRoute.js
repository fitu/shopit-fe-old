// Get router from express
const express = require('express');
const router = express.Router();

// Set relative url to controller
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const {
    getProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    createProductReview,
    getProductReviews,
    deleteReview,
} = require('../controllers/productController');

router.route('/products').get(getProducts);
router.route('/product/:id').get(getProduct);
router.route('/admin/product/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct);
router.route('/admin/product/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);
router.route('/product/new').post(isAuthenticatedUser, createProduct);
router.route('/review').put(isAuthenticatedUser, createProductReview);
router.route('/reviews').get(isAuthenticatedUser, getProductReviews).delete(isAuthenticatedUser, deleteReview);

module.exports = router;
