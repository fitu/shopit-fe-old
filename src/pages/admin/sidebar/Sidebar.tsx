import React from 'react';
import { Link } from 'react-router-dom';

import { Route } from '../../../router/route';
import './styles/sidebar.scss';

const Sidebar = () => (
    <div className={''}>
        <nav className={''} id={'sidebar'}>
            <ul className={''}>
                <li>
                    <Link to={Route.ADMIN_HOME}>
                        <i className={'fa fa-tachometer-alt'} /> Dashboard
                    </Link>
                </li>
                <li>
                    <a className={''} href={'#productSubmenu'}>
                        <i className={'fa fa-product-hunt'} /> Products
                    </a>
                    <ul className={''} id={'productSubmenu'}>
                        <li>
                            <Link to={Route.ADMIN_PRODUCTS}>
                                <i className={'fa fa-clipboard-list'} /> All
                            </Link>
                        </li>
                        <li>
                            <Link to={Route.ADMIN_PRODUCT}>
                                <i className={'fa fa-plus'} /> Create
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to={Route.ADMIN_ORDERS}>
                        <i className={'fa fa-shopping-basket'} /> Orders
                    </Link>
                </li>
                <li>
                    <Link to={Route.ADMIN_USERS}>
                        <i className={'fa fa-users'} /> Users
                    </Link>
                </li>
                <li>
                    <Link to={Route.ADMIN_REVIEWS}>
                        <i className={'fa fa-star'} /> Reviews
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
