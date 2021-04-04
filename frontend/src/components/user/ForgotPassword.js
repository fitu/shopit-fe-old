import React, { useEffect, useState } from 'react';
import { clearErrors, forgotPassword } from '../../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

import MetaData from '../common/MetaData';
import { useAlert } from 'react-alert';

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
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">Forgot Password</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">Enter Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <button
                            disabled={loading}
                            id="forgot_password_button"
                            type="submit"
                            className="btn btn-block py-3"
                        >
                            Send Email
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
