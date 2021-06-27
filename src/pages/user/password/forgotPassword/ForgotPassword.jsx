import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import MetaData from '../../../../components/util/MetaData';
import { forgotPassword } from '../../../../store/actions/auth/authActions';
import './styles/forgotPassword.scss';

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
            <MetaData title={'Forgot password'} />
            <div className={''}>
                <div className={''}>
                    <form className={''} onSubmit={submitHandler}>
                        <h1 className={''}>{'Forgot Password'}</h1>
                        <div className={''}>
                            <label htmlFor={'email_field'}>{'Enter Email'}</label>
                            <input
                                className={''}
                                id={'email_field'}
                                type={'email'}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <button className={''} disabled={loading} id={'forgot_password_button'} type={'submit'}>
                            {'Send Email'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

ForgotPassword.displayName = 'ForgotPassword';

export default ForgotPassword;
