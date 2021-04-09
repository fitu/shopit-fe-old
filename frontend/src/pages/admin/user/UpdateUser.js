import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import Sidebar from '../Sidebar';
import MetaData from '../../../components/util/MetaData';

import { Role } from '../../../models/role';
import { clearErrors, getUserDetails, updateUser, updateUserReset } from '../../../store/actions/authActions';
import { Route } from '../../../components/router/route';

const UpdateUser = ({ match, history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const alert = useAlert();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.userDetails);
    const { error, isUpdated } = useSelector((state) => state.user);

    useEffect(() => {
        if (user && user._id !== match.params.id) {
            dispatch(getUserDetails(match.params.id));
        } else {
            setName(user.name);
            setEmail(user.email);
            setRole(user.role);
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isUpdated) {
            alert.success('User updated successfully.');
            history.push(Route.ADMIN_USERS);
            dispatch(updateUserReset());
        }
    }, [dispatch, error, alert, history, user, isUpdated, match.params.id]);

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('role', role);

        dispatch(updateUser(user._id, formData));
    };

    return (
        <>
            <MetaData title="Update user" />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>
                <div className="col-12 col-md-10">
                    <>
                        <div className="row wrapper">
                            <div className="col-10 col-lg-5">
                                <form className="shadow-lg" onSubmit={submitHandler}>
                                    <h1 className="mt-2 mb-5">Update User</h1>
                                    <div className="form-group">
                                        <label htmlFor="name_field">Name</label>
                                        <input
                                            type="name"
                                            id="name_field"
                                            className="form-control"
                                            name="name"
                                            value={name}
                                            onChange={(event) => setName(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email_field">Email</label>
                                        <input
                                            type="email"
                                            id="email_field"
                                            className="form-control"
                                            name="email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="role_field">Role</label>

                                        <select
                                            id="role_field"
                                            className="form-control"
                                            name="role"
                                            value={role}
                                            onChange={(event) => setRole(event.target.value)}
                                        >
                                            {Object.values(Role).map((role) => (
                                                <option value={role}>{role}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <button type="submit" className="btn update-btn btn-block mt-4 mb-3">
                                        Update
                                    </button>
                                </form>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </>
    );
};

export default UpdateUser;
