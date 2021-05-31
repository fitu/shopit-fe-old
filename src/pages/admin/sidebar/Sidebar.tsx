import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import Strings from '../../../resources/strings/pages/admin/sidebar/sidebarStrings';
import { Route } from '../../../router/route';
import './styles/sidebar.scss';

const Sidebar: React.FC = (): ReactElement => (
    <div className={''}>
        <nav className={''} id={'sidebar'}>
            <ul className={''}>
                <li>
                    <Link to={Route.ADMIN_HOME}>
                        <i className={'fa fa-tachometer-alt'} />
                        {Strings.dashboard}
                    </Link>
                </li>
                <li>
                    <a className={''} href={'#productSubMenu'}>
                        <i className={'fa fa-product-hunt'} />
                        {Strings.products}
                    </a>
                    <ul className={''} id={'productSubMenu'}>
                        <li>
                            <Link to={Route.ADMIN_PRODUCTS}>
                                <i className={'fa fa-clipboard-list'} />
                                {Strings.all}
                            </Link>
                        </li>
                        <li>
                            <Link to={Route.ADMIN_PRODUCT}>
                                <i className={'fa fa-plus'} />
                                {Strings.create}
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to={Route.ADMIN_ORDERS}>
                        <i className={'fa fa-shopping-basket'} />
                        {Strings.orders}
                    </Link>
                </li>
                <li>
                    <Link to={Route.ADMIN_USERS}>
                        <i className={'fa fa-users'} />
                        {Strings.users}
                    </Link>
                </li>
                <li>
                    <Link to={Route.ADMIN_REVIEWS}>
                        <i className={'fa fa-star'} />
                        {Strings.reviews}
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
