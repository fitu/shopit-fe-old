import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Item from '../../../../models/item';

import Strings from '../../../../resources/strings/components/layout/header/cartStrings';
import { Route as LocalRoutes } from '../../../../router/route';

const CartHeader = ({ cartItems }) => (
    <Link className={'header-profile__cart'} to={LocalRoutes.CART}>
        <span className={'header-profile__cart--title'}>{Strings.cart}</span>
        <span className={'header-profile__cart--total'}>{cartItems.length}</span>
    </Link>
);

CartHeader.displayName = 'CartHeader';

CartHeader.propTypes = {
    cartItems: PropTypes.arrayOf(Item),
};

CartHeader.defaultProps = {
    cartItems: [],
};

export default CartHeader;
