import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Cart from './components/cart/Cart';
import ConfirmOrder from './components/cart/ConfirmOrder';
import { Elements } from '@stripe/react-stripe-js';
import Footer from './components/common/Footer';
import ForgotPassword from './components/user/ForgotPassword';
import Header from './components/common/Header';
import Home from './components/Home';
import Login from './components/user/Login';
import NewPassword from './components/user/NewPassword';
import OrderSuccess from './components/cart/OrderSuccess';
import Payment from './components/cart/Payment';
import ProductDetails from './components/product/ProductDetails';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';
import Register from './components/user/Register';
import Shipping from './components/cart/Shipping';
import UpdatePassword from './components/user/UpdatePassword';
import UpdateProfile from './components/user/UpdateProfile';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { loadUser } from './store/actions/authActions';
import { useDispatch } from 'react-redux';

function App() {
    const [stripeAPIKey, setStripeAPIKey] = useState('');

    const dispatch = useDispatch();

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
                    <ProtectedRoute path="/order/confirm" component={ConfirmOrder} />
                    <ProtectedRoute path="/success" component={OrderSuccess} />

                    {stripeAPIKey && (
                        <Elements stripe={loadStripe(stripeAPIKey)}>
                            <ProtectedRoute path="/payment" component={Payment} />
                        </Elements>
                    )}
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
