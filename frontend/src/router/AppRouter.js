import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import AdminRoutes from './AdminRoutes';
import RouterProtector from './RouterProtetor';
import Cart from '../pages/cart/Cart';
import ConfirmOrder from '../pages/cart/confirmOrder/ConfirmOrder';
import OrderSuccess from '../pages/cart/orderSuccess/OrderSuccess';
import Payment from '../pages/cart/payment/Payment';
import Shipping from '../pages/cart/shipping/Shipping';
import Home from '../pages/home/Home';
import ListOrders from '../pages/order/listOrders/ListOrders';
import OrderDetails from '../pages/order/orderDetails/OrderDetails';
import ProductDetails from '../pages/product/ProductDetails';
import Profile from '../pages/user/profile/profile/Profile';
import ForgotPassword from '../pages/user/password/forgotPassword/ForgotPassword';
import Login from '../pages/user/login/Login';
import NewPassword from '../pages/user/password/newPassword/NewPassword';
import Register from '../pages/user/register/Register';
import UpdatePassword from '../pages/user/password/updatePassword/UpdatePassword';
import UpdateProfile from '../pages/user/profile/updateProfile/UpdateProfile';

import { getStripeApi } from '../api/api';
import { loadUser } from '../store/actions/authActions';
import { Route as LocalRoutes } from './route';

const AppRouter = () => {
    const dispatch = useDispatch();

    const [stripeAPIKey, setStripeAPIKey] = useState('');

    useEffect(() => {
        dispatch(loadUser());

        async function getStripeAPIKey() {
            const { data } = await getStripeApi();
            setStripeAPIKey(data.stripeApiKey);
        }

        getStripeAPIKey();
    }, [dispatch]);

    return (
        <>
            <>
                {/* Home */}
                <Route path={LocalRoutes.HOME} component={Home} exact />
                {/* User */}
                <Route path={LocalRoutes.LOGIN} component={Login} />
                <Route path={LocalRoutes.PASSWORD_FORGOT} component={ForgotPassword} />
                <Route path={`${LocalRoutes.PASSWORD_RESET}/:token`} component={NewPassword} />
                <RouterProtector path={LocalRoutes.PASSWORD_UPDATE} component={UpdatePassword} exact />
                <Route path={LocalRoutes.USER_REGISTER} component={Register} />
                <RouterProtector path={LocalRoutes.USER_MY_PROFILE} component={Profile} exact />
                <RouterProtector path={LocalRoutes.USER_UPDATE_PROFILE} component={UpdateProfile} exact />
                {/* Products */}
                <Route path={`${LocalRoutes.PRODUCT}/:id`} component={ProductDetails} />
                {/* Cart & Checkout */}
                <Route path={LocalRoutes.CART} component={Cart} />
                <RouterProtector path={LocalRoutes.CHECKOUT_STEP_SHIPPING} component={Shipping} exact />
                <RouterProtector path={LocalRoutes.CHECKOUT_STEP_CONFIRM} component={ConfirmOrder} exact />
                {stripeAPIKey && (
                    <Elements stripe={loadStripe(stripeAPIKey)}>
                        <RouterProtector path={LocalRoutes.CHECKOUT_STEP_PAYMENT} component={Payment} />
                    </Elements>
                )}
                <RouterProtector path={LocalRoutes.CHECKOUT_STEP_SUCCESS} component={OrderSuccess} exact />
                {/* Orders */}
                <RouterProtector path={`${LocalRoutes.ORDER}/:id`} component={OrderDetails} exact />
                <RouterProtector path={LocalRoutes.ORDER_MY} component={ListOrders} exact />
                {/* Extras */}
                <Route path={`${LocalRoutes.SEARCH}/:keyword`} component={Home} />
            </>
            <AdminRoutes />
        </>
    );
};

export default AppRouter;
