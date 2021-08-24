import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import Strings from '../../../../resources/strings/components/layout/header/cartStrings';
import { Route as LocalRoutes } from '../../../../router/route';

const CartHeader = ({ cartItems }) => (
    <Link className={'header-profile__cart'} to={LocalRoutes.CART}>
        <span className={'header-profile__cart--title'}>{Strings.cart}</span>
        <img src={'./images/cartBuy.png'} alt={'logo-cart'}/>
        <span className={'header-profile__cart--total'}>{cartItems.length}</span>
    </Link>
);

CartHeader.displayName = 'CartHeader';

CartHeader.propTypes = {
    cartItems: PropTypes.array,
};

CartHeader.defaultProps = {
    cartItems: [],
};

export default CartHeader;
