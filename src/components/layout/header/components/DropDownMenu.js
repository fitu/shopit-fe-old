import { Link } from 'react-router-dom';
import { Role } from '../../../../models/role';
import { Route as LocalRoutes } from '../../../../router/route';

const DropDownMenu = ({ user, logoutHandler }) => (
    <div className="header-profile__drop-down-menu--list">
        {user?.role === Role.ADMIN && <Link to={LocalRoutes.ADMIN_HOME}>Dashboard</Link>}
        <Link to={LocalRoutes.ORDER_MY}>Orders</Link>
        <Link to={LocalRoutes.USER_MY_PROFILE}>Profile</Link>
        <Link to={LocalRoutes.HOME} onClick={logoutHandler}>
            Logout
        </Link>
    </div>
);

export default DropDownMenu;
