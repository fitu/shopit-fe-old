import './App.css';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import ProtectedRoute from './components/routes/ProtectedRoute';
import Dashboard from './pages/admin/Dashboard';
import OrderList from './pages/admin/order/OrderList';
import ProcessOrder from './pages/admin/order/ProcessOrder';
import NewProduct from './pages/admin/product/NewProduct';
import ProductsList from './pages/admin/product/ProductsList';
import UpdateProduct from './pages/admin/product/UpdateProduct';
import ProductReviews from './pages/admin/review/ProductReviews';
import UpdateUser from './pages/admin/user/UpdateUser';
import UsersList from './pages/admin/user/UsersList';
import Cart from './pages/cart/Cart';
import ConfirmOrder from './pages/cart/ConfirmOrder';
import OrderSuccess from './pages/cart/OrderSuccess';
import Payment from './pages/cart/Payment';
import Shipping from './pages/cart/Shipping';
import Home from './pages/home/Home';
import ProductDetails from './pages/product/ProductDetails';
import ListOrders from './pages/order/ListOrders';
import OrderDetails from './pages/order/OrderDetails';
import ForgotPassword from './pages/user/ForgotPassword';
import Login from './pages/user/Login';
import NewPassword from './pages/user/NewPassword';
import Profile from './pages/user/Profile';
import Register from './pages/user/Register';
import UpdatePassword from './pages/user/UpdatePassword';
import UpdateProfile from './pages/user/UpdateProfile';

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
