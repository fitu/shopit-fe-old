import './styles/profile.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../../../../components/util/Loader';
import Metadata from '../../../../components/util/MetaData';
import { Role } from '../../../../models/role';
import { Route } from '../../../../router/route';

const Profile = () => {
    const { user, loading } = useSelector((state) => state.auth);

    if (loading) {
        return <Loader />;
    }
    return (
        <>
            <Metadata title="My profile" />
            <h2 className="">My Profile</h2>
            <div className="">
                <div className="">
                    <figure className="">
                        <img className="" src={user.avatar.url} alt={user.name} />
                  </figure>
                    <Link to={Route.USER_UPDATE_PROFILE} className="">
                    Edit Profile
                    </Link>
              </div>

                <div className="">
                    <h4 className="">Full Name</h4>
                    <p className="">{user.name}</p>

                    <h4 className="">Email Address</h4>
                    <p className="">{user.email}</p>

                    <h4 className="">Joined on</h4>
                    <p className="">{String(user.createdAt).substring(0, 10)}</p>

                    {user.role !== Role.ADMIN && (
                        <Link to={Route.ORDER_MY} className="">
                      My Orders
                        </Link>
                    )}

                    <Link to={Route.PASSWORD_UPDATE} className="">
                    Change Password
                    </Link>
              </div>
          </div>
      </>
    );
};

export default Profile;
