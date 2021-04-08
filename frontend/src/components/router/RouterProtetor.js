import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { Roles } from '../../models/roles';
import { Routes } from './routes';

const RouterProtector = ({ isAdmin, component: Component, ...rest }) => {
    const { isAuthenticated, user, loading } = useSelector((state) => state.auth);

    return (
        <>
            {!loading && (
                <Route
                    {...rest}
                    render={(props) => {
                        if (!isAuthenticated) {
                            return <Redirect to={Routes.LOGIN} />;
                        }

                        if (isAdmin && user.role !== Roles.ADMIN) {
                            return <Redirect to={Routes.HOME} />;
                        }
                        return <Component {...props} />;
                    }}
                />
            )}
        </>
    );
};

export default RouterProtector;
