import React from 'react';
import { Link } from 'react-router-dom';

import { Route as LocalRoutes } from '../../../../router/route';

const LoginButton = () => (
    <Link className={'header-profile__login-button'} to={LocalRoutes.LOGIN}>
        {'Login'}
    </Link>
);

LoginButton.displayName = 'LoginButton';

export default LoginButton;
