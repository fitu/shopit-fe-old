import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Routes } from '../../components/router/routes';

import MetaData from '../../components/util/MetaData';

import { clearErrors, updatePassword, updatePasswordReset } from '../../store/actions/authActions';

const UpdatePassword = ({ history }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error, isUpdated, loading } = useSelector((state) => state.user);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('Password updated successfully.');
            history.push(Routes.USER_MY_PROFILE);
            dispatch(updatePasswordReset());
        }
    }, [dispatch, error, alert, history, isUpdated]);

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.set('oldPassword', oldPassword);
        formData.set('password', password);

        dispatch(updatePassword(formData));
    };

    return (
        <>
            <MetaData title="Change Password" />
            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mt-2 mb-5">Update Password</h1>
                        <div className="form-group">
                            <label htmlFor="old_password_field">Old Password</label>
                            <input
                                type="password"
                                id="old_password_field"
                                className="form-control"
                                value={oldPassword}
                                onChange={(event) => setOldPassword(event.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="new_password_field">New Password</label>
                            <input
                                type="password"
                                id="new_password_field"
                                className="form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        <button disabled={loading} type="submit" className="btn update-btn btn-block mt-4 mb-3">
                            Update Password
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdatePassword;
