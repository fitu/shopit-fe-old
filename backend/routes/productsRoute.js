// Get router from express
const express = require('express');
const router = express.Router();

// Set relative url to controller
const { getProducts, createProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/productController');
router.route('/products').get(getProducts);
router.route('/product/:id').get(getProduct);
router.route('/admin/product/:id').put(updateProduct);
router.route('/admin/product/:id').delete(deleteProduct);
router.route('/product/new').post(createProduct);

module.exports = router;