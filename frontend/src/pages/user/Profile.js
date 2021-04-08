import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Routes } from '../../components/router/routes';

import Loader from '../../components/util/Loader';
import Metadata from '../../components/util/MetaData';

import { Roles } from '../../models/roles';

const Profile = () => {
    const { user, loading } = useSelector((state) => state.auth);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Metadata title="My profile" />
                    <h2 className="mt-5 ml-5">My Profile</h2>
                    <div className="row justify-content-around mt-5 user-info">
                        <div className="col-12 col-md-3">
                            <figure className="avatar avatar-profile">
                                <img className="rounded-circle img-fluid" src={user.avatar.url} alt={user.name} />
                            </figure>
                            <Link
                                to={Routes.USER_UPDATE_PROFILE}
                                id="edit_profile"
                                className="btn btn-primary btn-block my-5"
                            >
                                Edit Profile
                            </Link>
                        </div>

                        <div className="col-12 col-md-5">
                            <h4>Full Name</h4>
                            <p>{user.name}</p>

                            <h4>Email Address</h4>
                            <p>{user.email}</p>

                            <h4>Joined on</h4>
                            <p>{String(user.createdAt).substring(0, 10)}</p>

                            {user.role !== Roles.ADMIN && (
                                <Link to={Routes.ORDER_MY} className="btn btn-danger btn-block mt-5">
                                    My Orders
                                </Link>
                            )}

                            <Link to={Routes.PASSWORD_UPDATE} className="btn btn-primary btn-block mt-3">
                                Change Password
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Profile;
