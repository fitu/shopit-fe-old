import './styles/forgotPassword.scss';
import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import MetaData from '../../../../components/util/MetaData';

import { clearErrors, forgotPassword } from '../../../../store/actions/authActions';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, message, loading } = useSelector((state) => state.password);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (message) {
            alert.success(message);
        }
    }, [dispatch, error, alert, message]);

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.set('email', email);

        dispatch(forgotPassword(formData));
    };

    return (
        <>
            <MetaData title="Forgot password" />
            <div className="">
                <div className="">
                    <form className="" onSubmit={submitHandler}>
                        <h1 className="">Forgot Password</h1>
                        <div className="">
                            <label htmlFor="email_field">Enter Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className=""
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <button disabled={loading} id="forgot_password_button" type="submit" className="">
                            Send Email
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
