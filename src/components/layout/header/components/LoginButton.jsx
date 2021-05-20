import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { Route as LocalRoutes } from '../../../../router/route';

const LoginButton = ({ isLoggedIn }) =>
    !isLoggedIn && (
        <Link className={'header-profile__login-button'} to={LocalRoutes.LOGIN}>
            {'Login'}
        </Link>
    );

LoginButton.displayName = 'LoginButton';

LoginButton.propTypes = {
    isLoggedIn: PropTypes.bool,
};

LoginButton.defaultProps = {
    isLoggedIn: false,
};

export default LoginButton;
