import { bool } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import { Route as LocalRoutes } from '../../../../router/route';

const LoginButton = ({ loading }) =>
    !loading && (
        <Link className={'header-profile__login-button'} to={LocalRoutes.LOGIN}>
            {'Login'}
        </Link>
    );

LoginButton.diplayName = 'LoginButton';

LoginButton.propTypes = {
    loading: bool,
};

LoginButton.defaultProps = {
    loading: false,
};

export default LoginButton;
