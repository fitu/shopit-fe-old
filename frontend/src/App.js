import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Cart from './components/cart/Cart';
import Footer from './components/common/Footer';
import ForgotPassword from './components/user/ForgotPassword';
import Header from './components/common/Header';
import Home from './components/Home';
import Login from './components/user/Login';
import NewPassword from './components/user/NewPassword';
import ProductDetails from './components/product/ProductDetails';
import Profile from './components/user/Profile';
import ProtectedRoute from './components/route/ProtectedRoute';
import Register from './components/user/Register';
import UpdatePassword from './components/user/UpdatePassword';
import UpdateProfile from './components/user/UpdateProfile';
import { loadUser } from './store/actions/authActions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
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
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
