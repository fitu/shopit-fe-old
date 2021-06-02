import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import { getStripeApiKey } from '../api/api.ts';
import Cart from '../pages/cart/Cart';
import ConfirmOrder from '../pages/cart/confirmOrder/ConfirmOrder';
import OrderSuccess from '../pages/cart/orderSuccess/OrderSuccess';
import Payment from '../pages/cart/payment/Payment';
import Shipping from '../pages/cart/shipping/Shipping';
import Home from '../pages/home/Home';
import ListOrders from '../pages/order/listOrders/ListOrders';
import OrderDetails from '../pages/order/orderDetails/OrderDetails';
import ProductDetails from '../pages/product/ProductDetails';
import Login from '../pages/user/login/Login';
import ForgotPassword from '../pages/user/password/forgotPassword/ForgotPassword';
import NewPassword from '../pages/user/password/newPassword/NewPassword';
import UpdatePassword from '../pages/user/password/updatePassword/UpdatePassword';
import Profile from '../pages/user/profile/profile/Profile';
import UpdateProfile from '../pages/user/profile/updateProfile/UpdateProfile';
import Register from '../pages/user/register/Register';
import { loadUser } from '../store/actions/auth/authActions';

import AdminRoutes from './AdminRoutes';
import { Route as LocalRoutes } from './route.ts';
import RouterProtector from './RouterProtector';

const AppRouter = () => {
    const dispatch = useDispatch();

    const [stripeAPIKey, setStripeAPIKey] = useState('');

    useEffect(() => {
        dispatch(loadUser());

        const getStripeAPIKey = async () => {
            try {
                const { data } = await getStripeApiKey();
                setStripeAPIKey(data.stripeApiKey);
            } catch {
                // TODO: remove console log
                console.log('There was an error with Stripe');
            }
        };

        getStripeAPIKey();
    }, [dispatch]);

    return (
        <>
            <>
                {/* Home */}
                <Route exact component={Home} path={LocalRoutes.HOME} />

                {/* User */}
                <Route component={Login} path={LocalRoutes.LOGIN} />
                <Route component={ForgotPassword} path={LocalRoutes.PASSWORD_FORGOT} />
                <Route component={NewPassword} path={`${LocalRoutes.PASSWORD_RESET}/:token`} />
                <RouterProtector exact component={UpdatePassword} path={LocalRoutes.PASSWORD_UPDATE} />
                <Route component={Register} path={LocalRoutes.USER_REGISTER} />
                <RouterProtector exact component={Profile} path={LocalRoutes.USER_MY_PROFILE} />
                <RouterProtector exact component={UpdateProfile} path={LocalRoutes.USER_UPDATE_PROFILE} />

                {/* Products */}
                <Route component={ProductDetails} path={`${LocalRoutes.PRODUCT}/:id`} />

                {/* Cart & Checkout */}
                <Route component={Cart} path={LocalRoutes.CART} />
                <RouterProtector exact component={Shipping} path={LocalRoutes.CHECKOUT_STEP_SHIPPING} />
                <RouterProtector exact component={ConfirmOrder} path={LocalRoutes.CHECKOUT_STEP_CONFIRM} />
                {stripeAPIKey && (
                    <Elements stripe={loadStripe(stripeAPIKey)}>
                        <RouterProtector component={Payment} path={LocalRoutes.CHECKOUT_STEP_PAYMENT} />
                    </Elements>
                )}
                <RouterProtector exact component={OrderSuccess} path={LocalRoutes.CHECKOUT_STEP_SUCCESS} />

                {/* Orders */}
                <RouterProtector exact component={OrderDetails} path={`${LocalRoutes.ORDER}/:id`} />
                <RouterProtector exact component={ListOrders} path={LocalRoutes.ORDER_MY} />

                {/* Extras */}
                <Route component={Home} path={`${LocalRoutes.SEARCH}/:keyword`} />
            </>
            <AdminRoutes />
        </>
    );
};

AppRouter.displayName = 'AppRouter';

export default AppRouter;
