import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import Cart from './components/cart/Cart';
import ConfirmOrder from './components/cart/ConfirmOrder';
import Dashboard from './components/admin/Dashboard';
import { Elements } from '@stripe/react-stripe-js';
import Footer from './components/common/Footer';
import ForgotPassword from './components/user/ForgotPassword';
import Header from './components/common/Header';
import Home from './components/Home';
import ListOrders from './components/order/ListOrders';
import Login from './components/user/Login';
import NewPassword from './components/user/NewPassword';
import NewProduct from './components/admin/NewProduct';
import OrderDetails from './components/order/OrderDetails';
import OrderList from './components/admin/OrderList';
import OrderSuccess from './components/cart/OrderSuccess';
import Payment from './components/cart/Payment';
import ProcessOrder from './components/admin/ProcessOrder';
import ProductDetails from './components/product/ProductDetails';
import ProductReviews from './components/admin/ProductReviews';
import ProductsList from './components/admin/ProductsList';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';
import Register from './components/user/Register';
import Shipping from './components/cart/Shipping';
import UpdatePassword from './components/user/UpdatePassword';
import UpdateProduct from './components/admin/UpdateProduct';
import UpdateProfile from './components/user/UpdateProfile';
import UpdateUser from './components/admin/UpdateUser';
import UsersList from './components/admin/UsersList';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { loadUser } from './store/actions/authActions';

function App() {
    const dispatch = useDispatch();

    const [stripeAPIKey, setStripeAPIKey] = useState('');

    const { user, loading } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(loadUser());

        async function getStripeAPIKey() {
            const { data } = await axios.get('api/v1/stripeapi');
            setStripeAPIKey(data.stripeApiKey);
        }

        getStripeAPIKey();
    }, [dispatch]);

    return (
        <Router>
            <div className="App">
                <Header />
                <div className="container container-fluid">
                    <Route path="/" component={Home} exact />
                    <Route path="/search/:keyword" component={Home} />
                    <Route path="/product/:id" component={ProductDetails} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/password/forgot" component={ForgotPassword} />
                    <Route path="/password/reset/:token" component={NewPassword} />
                    <Route path="/cart" component={Cart} />
                    <ProtectedRoute path="/me" component={Profile} exact />
                    <ProtectedRoute path="/me/update" component={UpdateProfile} />
                    <ProtectedRoute path="/password/update" component={UpdatePassword} />
                    <ProtectedRoute path="/shipping" component={Shipping} />
                    <ProtectedRoute path="/confirm" component={ConfirmOrder} />
                    <ProtectedRoute path="/success" component={OrderSuccess} />
                    <ProtectedRoute path="/orders/me" component={ListOrders} />
                    <ProtectedRoute path="/order/:id" component={OrderDetails} />

                    {stripeAPIKey && (
                        <Elements stripe={loadStripe(stripeAPIKey)}>
                            <ProtectedRoute path="/payment" component={Payment} />
                        </Elements>
                    )}
                </div>
                <ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} />
                <ProtectedRoute path="/admin/products" isAdmin={true} component={ProductsList} />
                <ProtectedRoute path="/admin/product" isAdmin={true} component={NewProduct} exact />
                <ProtectedRoute path="/admin/product/:id" isAdmin={true} component={UpdateProduct} />
                <ProtectedRoute path="/admin/orders" isAdmin={true} component={OrderList} />
                <ProtectedRoute path="/admin/order/:id" isAdmin={true} component={ProcessOrder} />
                <ProtectedRoute path="/admin/users" isAdmin={true} component={UsersList} />
                <ProtectedRoute path="/admin/user/:id" isAdmin={true} component={UpdateUser} />
                <ProtectedRoute path="/admin/reviews" isAdmin={true} component={ProductReviews} />

                {!loading && user?.role !== 'admin' && <Footer />}
            </div>
        </Router>
    );
}

export default App;
