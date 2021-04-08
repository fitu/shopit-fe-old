import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import AdminRoutes from './AdminRoutes';
import RouterProtector from './RouterProtetor';
import Cart from '../../pages/cart/Cart';
import ConfirmOrder from '../../pages/cart/ConfirmOrder';
import OrderSuccess from '../../pages/cart/OrderSuccess';
import Payment from '../../pages/cart/Payment';
import Shipping from '../../pages/cart/Shipping';
import Home from '../../pages/home/Home';
import ListOrders from '../../pages/order/ListOrders';
import OrderDetails from '../../pages/order/OrderDetails';
import ProductDetails from '../../pages/product/ProductDetails';
import Profile from '../../pages/user/Profile';
import ForgotPassword from '../../pages/user/ForgotPassword';
import Login from '../../pages/user/Login';
import NewPassword from '../../pages/user/NewPassword';
import Register from '../../pages/user/Register';
import UpdatePassword from '../../pages/user/UpdatePassword';
import UpdateProfile from '../../pages/user/UpdateProfile';

import { loadUser } from '../../store/actions/authActions';

const AppRouter = () => {
    const dispatch = useDispatch();

    const [stripeAPIKey, setStripeAPIKey] = useState('');

    useEffect(() => {
        dispatch(loadUser());

        async function getStripeAPIKey() {
            const { data } = await axios.get('api/v1/stripeapi');
            setStripeAPIKey(data.stripeApiKey);
        }

        getStripeAPIKey();
    }, [dispatch]);

    return (
        <>
            <div className="container container-fluid">
                {/* Home */}
                <Route path="/" component={Home} exact />

                {/* User */}
                <Route path="/login" component={Login} />
                <Route path="/password/forgot" component={ForgotPassword} />
                <Route path="/password/reset/:token" component={NewPassword} />
                <RouterProtector path="/password/update" component={UpdatePassword} exact />
                <Route path="/register" component={Register} />
                <RouterProtector path="/me" component={Profile} exact />
                <RouterProtector path="/me/update" component={UpdateProfile} exact />

                {/* Products */}
                <Route path="/product/:id" component={ProductDetails} />

                {/* Cart & Checkout */}
                <Route path="/cart" component={Cart} />
                <RouterProtector path="/shipping" component={Shipping} exact />
                <RouterProtector path="/confirm" component={ConfirmOrder} exact />
                {stripeAPIKey && (
                    <Elements stripe={loadStripe(stripeAPIKey)}>
                        <RouterProtector path="/payment" component={Payment} />
                    </Elements>
                )}
                <RouterProtector path="/success" component={OrderSuccess} exact />

                {/* Orders */}
                <RouterProtector path="/order/:id" component={OrderDetails} exact />
                <RouterProtector path="/orders/me" component={ListOrders} exact />

                {/* Extras */}
                <Route path="/search/:keyword" component={Home} />
            </div>
            <AdminRoutes />
        </>
    );
};

export default AppRouter;
