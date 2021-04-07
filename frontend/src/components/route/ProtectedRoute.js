import { Redirect, Route } from 'react-router-dom';

import React from 'react';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
    const { isAuthenticated, user, loading } = useSelector((state) => state.auth);

    return (
        <>
            {!loading && (
                <Route
                    {...rest}
                    render={(props) => {
                        if (!isAuthenticated) {
                            return <Redirect to="/login" />;
                        }

                        if (isAdmin && user.role !== 'admin') {
                            return <Redirect to="/" />;
                        }
                        return <Component {...props} />;
                    }}
                />
            )}
        </>
    );
};

export default ProtectedRoute;
