import React, { useEffect, useState } from 'react';
import { clearErrors, resetPassword } from '../../store/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

import MetaData from '../common/MetaData';
import { useAlert } from 'react-alert';

const NewPassword = ({ history, match }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, success } = useSelector((state) => state.password);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (success) {
            alert.success('Password updated succesfully!');
            history.push('/login');
        }
    }, [dispatch, error, alert, success, history]);

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.set('password', password);
        formData.set('confirmPassword', confirmPassword);

        dispatch(resetPassword(match.params.token, formData));
    };

    return (
        <>
            <MetaData tite="New password" />
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">New Password</h1>

                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirm_password_field">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm_password_field"
                                className="form-control"
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                        </div>

                        <button id="new_password_button" type="submit" className="btn btn-block py-3">
                            Set Password
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewPassword;
