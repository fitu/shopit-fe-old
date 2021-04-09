import './styles/login.scss';
import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../../../components/util/Loader';
import MetaData from '../../../components/util/MetaData';

import { Route } from '../../../router/route';
import { clearErrors, login } from '../../../store/actions/authActions';

const Login = ({ history, location }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { isAuthenticated, loading, error } = useSelector((state) => state.auth);

    const redirect = location.search ? location.search.split('=')[1] : Route.HOME;

    useEffect(() => {
        if (isAuthenticated) {
            history.push(redirect);
            return;
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
            return;
        }
    }, [dispatch, isAuthenticated, error, alert, history, redirect]);

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(login(email, password));
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <MetaData title="Login" />
            <div className="">
                <div className="">
                    <form className="" onSubmit={submitHandler}>
                        <h1 className="">Login</h1>
                        <div className="">
                            <label htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className=""
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className=""
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        <Link to={Route.PASSWORD_FORGOT} className="">
                            Forgot Password?
                        </Link>

                        <button id="login_button" type="submit" className="">
                            LOGIN
                        </button>

                        <Link to={Route.USER_REGISTER} className="">
                            New User?
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
