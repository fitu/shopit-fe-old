import './styles/header.scss';

import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import { Route as LocalRoutes } from '../../../router/route';
import { logoutUser } from '../../../store/actions/authActions';
import CartHeader from './components/Cart';
import LoggedUserHeader from './components/LoggedUser';
import LoginButton from './components/LoginButton';
import Search from './components/Search';

const Header = () => {
    const alert = useAlert();
    const dispatch = useDispatch();
    const { user, loading } = useSelector((state) => state.auth);
    const { cartItems } = useSelector((state) => state.cart);

    const logoutHandler = () => {
        dispatch(logoutUser());
        alert.success('Logged out success!');
    };

    return (
        <nav className="header">
            <Link className="header-logo" to={LocalRoutes.HOME}>
                <img src="./images/logo.png" alt="Logo" />
          </Link>

            <Route render={({ history }) => <Search history={history} />} />

            <div className="header-profile">
                <CartHeader cartItems={cartItems} />
                <div className="header-profile__container">
                    {user ? (
                        <LoggedUserHeader user={user} logoutHandler={logoutHandler} />
                    ) : (
                        <LoginButton loading={loading} />
                    )}
              </div>
          </div>
      </nav>
    );
};

export default Header;
