const express = require('express');
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
    getAdminProducts,
} = require('../controllers/productController');

const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/:id').get(getProduct);
router.route('/reviews').get(isAuthenticatedUser, getProductReviews).delete(isAuthenticatedUser, deleteReview);
router.route('/review').put(isAuthenticatedUser, createProductReview);

// TODO replace hardcoded
router.route('/admin/products').get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);
router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router
    .route('/admin/product/:id')
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

module.exports = router;
