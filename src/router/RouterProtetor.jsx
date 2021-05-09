import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { Role } from '../models/role.ts';

import { Route as LocalRoutes } from './route.ts';

const RouterProtector = ({ isAdmin, component: Component, ...rest }) => {
    const { isAuthenticated, user, loading } = useSelector((state) => state.auth);

    if (loading) {
        return <div />;
    }

    return (
        <Route
            {...rest}
            render={(properties) => {
                if (!isAuthenticated) {
                    return <Redirect to={LocalRoutes.LOGIN} />;
                }
                if (isAdmin && user.role !== Role.ADMIN) {
                    return <Redirect to={LocalRoutes.HOME} />;
                }
                return <Component {...properties} />;
            }}
        />
    );
};

RouterProtector.displayName = 'RouterProtector';

RouterProtector.propTypes = {
    component: PropTypes.elementType.isRequired,
    isAdmin: PropTypes.bool,
};

RouterProtector.defaultProps = {
    isAdmin: false,
};

export default RouterProtector;
