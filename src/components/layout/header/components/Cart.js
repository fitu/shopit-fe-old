import { Route as LocalRoutes } from '../../../../router/route';
import { Link } from 'react-router-dom';

const CartHeader = ({ cartItems }) => (
    <Link to={LocalRoutes.CART} className="header-profile__cart">
        <span className="header-profile__cart--title">Cart</span>
        <span className="header-profile__cart--total">{cartItems.length}</span>
    </Link>
);

export default CartHeader;
