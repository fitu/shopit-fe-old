import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../../../../components/util/Loader';
import Metadata from '../../../../components/util/MetaData';
import { Role } from '../../../../models/role';
import { Route } from '../../../../router/route';
import './styles/profile.scss';

const Profile = () => {
    const { user, loading } = useSelector((state) => state.auth);

    if (loading) {
        return <Loader />;
    }
    return (
        <>
            <Metadata title={'My profile'} />
            <h2 className={''}>{'My Profile'}</h2>
            <div className={''}>
                <div className={''}>
                    <figure className={''}>
                        <img alt={user.name} className={''} src={user.avatar.url} />
                    </figure>
                    <Link className={''} to={Route.USER_UPDATE_PROFILE}>
                        {'Edit Profile'}
                    </Link>
                </div>

                <div className={''}>
                    <h4 className={''}>{'Full Name'}</h4>
                    <p className={''}>{user.name}</p>

                    <h4 className={''}>{'Email Address'}</h4>
                    <p className={''}>{user.email}</p>

                    <h4 className={''}>{'Joined on'}</h4>
                    <p className={''}>{String(user.createdAt).slice(0, 10)}</p>

                    {user.role !== Role.ADMIN && (
                        <Link className={''} to={Route.ORDER_MY}>
                            {'My Orders'}
                        </Link>
                    )}

                    <Link className={''} to={Route.PASSWORD_UPDATE}>
                        {'Change Password'}
                    </Link>
                </div>
            </div>
        </>
    );
};

Profile.displayName = 'Profile';

export default Profile;
