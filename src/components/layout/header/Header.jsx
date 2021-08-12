import React from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import './styles/header.scss';
import { Route as LocalRoutes } from '../../../router/route';
import { logout } from '../../../store/actions/auth/authActions';

import CartHeader from './components/Cart';
import LoggedUserHeader from './components/LoggedUser';
import LoginButton from './components/LoginButton';
import Search from './components/Search';

const Header = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    // TODO: replace loading to isLoggedIn
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const { cartItems } = useSelector((state) => state.cart);

    const logoutHandler = () => {
        dispatch(logout());
        alert.success('Logged out success!');
    };

    return (
        <nav className={'header'}>
            <Link className={'header-logo'} to={LocalRoutes.HOME}>
                <img alt={'Logo'} src={'./images/logo.png'} />
            </Link>

            <Route render={({ history }) => <Search history={history} />} />
            <div className={'header-profile'}>
                <CartHeader cartItems={cartItems} />
                <div className={'header-profile__container'}>
                    {isAuthenticated ? <LoggedUserHeader logoutHandler={logoutHandler} user={user} /> : <LoginButton />}
                </div>
            </div>
        </nav>
    );
};

Header.displayName = 'Header';

export default Header;
