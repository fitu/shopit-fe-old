import { Link } from 'react-router-dom';

import { Route as LocalRoutes } from '../../../../router/route';

const LoginButton = ({ loading }) => !loading && (
<Link to={LocalRoutes.LOGIN} className="header-profile__login-button">
      Login
        </Link>
);

export default LoginButton;
