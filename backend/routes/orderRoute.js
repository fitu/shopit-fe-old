const express = require('express');
const { roles } = require('../models/user');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const {
    newOrder,
    getOrder,
    getMyOrders,
    allOrders,
    updateOrder,
    deleteOrder,
} = require('../controllers/orderController');

const router = express.Router();

router.route('/orders/me').get(isAuthenticatedUser, getMyOrders);
router.route('/order/new').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, getOrder);

router.route('/admin/orders').get(isAuthenticatedUser, authorizeRoles(roles.admin), allOrders);
router
    .route('/admin/order/:id')
    .put(isAuthenticatedUser, authorizeRoles(roles.admin), updateOrder)
    .delete(isAuthenticatedUser, authorizeRoles(roles.admin), deleteOrder);

module.exports = router;
