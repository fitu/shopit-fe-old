import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../../components/router/routes';

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <nav id="sidebar">
                <ul className="list-unstyled components">
                    <li>
                        <Link to={Routes.ADMIN_HOME}>
                            <i className="fa fa-tachometer-alt"></i> Dashboard
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#productSubmenu"
                            data-toggle="collapse"
                            aria-expanded="false"
                            className="dropdown-toggle"
                        >
                            <i className="fa fa-product-hunt"></i> Products
                        </a>
                        <ul className="collapse list-unstyled" id="productSubmenu">
                            <li>
                                <Link to={Routes.ADMIN_PRODUCTS}>
                                    <i className="fa fa-clipboard-list"></i> All
                                </Link>
                            </li>
                            <li>
                                <Link to={Routes.ADMIN_PRODUCT}>
                                    <i className="fa fa-plus"></i> Create
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to={Routes.ADMIN_ORDERS}>
                            <i className="fa fa-shopping-basket"></i> Orders
                        </Link>
                    </li>
                    <li>
                        <Link to={Routes.ADMIN_USERS}>
                            <i className="fa fa-users"></i> Users
                        </Link>
                    </li>
                    <li>
                        <Link to={Routes.ADMIN_REVIEWS}>
                            <i className="fa fa-star"></i> Reviews
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
