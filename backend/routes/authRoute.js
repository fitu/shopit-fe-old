const express = require('express');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth');
const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    getuserProfile,
    updatePassword,
    updateProfile,
    allUsers,
    getUserDetails,
    updateUser,
    deleteUser,
} = require('../controllers/authController');

const router = express.Router();

router.route('/login').post(loginUser);
router.route('/logout').get(logout);
router.route('/register').post(registerUser);
router.route('/me').get(isAuthenticatedUser, getuserProfile);
router.route('/me/update').put(isAuthenticatedUser, updateProfile);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/update').put(isAuthenticatedUser, updatePassword);
router.route('/password/reset/:token').put(resetPassword);

// TODO: replace hardcoded
router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles("admin"), allUsers);
router
    .route('/admin/user/:id')
    .get(isAuthenticatedUser, authorizeRoles("admin"), getUserDetails)
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateUser)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);

module.exports = router;
