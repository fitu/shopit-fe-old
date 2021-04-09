import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { Role } from '../models/role';
import { Route as LocalRoutes } from './route';

const RouterProtector = ({ isAdmin, component: Component, ...rest }) => {
    const { isAuthenticated, user, loading } = useSelector((state) => state.auth);

    return (
        <>
            {!loading && (
                <Route
                    {...rest}
                    render={(props) => {
                        if (!isAuthenticated) {
                            return <Redirect to={LocalRoutes.LOGIN} />;
                        }

                        if (isAdmin && user.role !== Role.ADMIN) {
                            return <Redirect to={LocalRoutes.HOME} />;
                        }
                        return <Component {...props} />;
                    }}
                />
            )}
        </>
    );
};

export default RouterProtector;
