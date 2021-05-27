import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles/dashboard.scss';
import Loader from '../../../components/util/Loader';
import Metadata from '../../../components/util/MetaData';
import { Route } from '../../../router/route';
import { getAllUsers } from '../../../store/actions/authActions';
import { getAllOrders } from '../../../store/actions/orderActions';
import { getAdminProducts } from '../../../store/actions/productAction';
import Sidebar from '../sidebar/Sidebar';

const Dashboard = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.products);
    const { orders, totalAmount, loading } = useSelector((state) => state.allOrders);
    const { users } = useSelector((state) => state.allUsers);

    let outOfStock = 0;
    products.forEach((product) => {
        if (product.stock === 0) {
            outOfStock += 1;
        }
    });

    useEffect(() => {
        dispatch(getAdminProducts());
        dispatch(getAllOrders());
        dispatch(getAllUsers());
    }, [dispatch]);

    return (
        <div className={''}>
            <div className={''}>
                <Sidebar />
            </div>

            <div className={''}>
                <h1 className={''}>{'Dashboard'}</h1>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <Metadata title={'Dashboard'} />
                        <div className={''}>
                            <div className={''}>
                                <div className={''}>
                                    <div className={''}>
                                        <div className={''}>
                                            {'Total Amount'}
                                            <br />
                                            <b>
                                                {'$'}
                                                {totalAmount?.toFixed(2)}
                                            </b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={''}>
                            <div className={''}>
                                <div className={''}>
                                    <div className={''}>
                                        <div className={''}>
                                            {'Products'}
                                            <br /> <b>{products?.length ?? 0}</b>
                                        </div>
                                    </div>
                                    <Link className={''} to={Route.ADMIN_PRODUCTS}>
                                        <span className={''}>{'View Details'}</span>
                                        <span className={''}>
                                            <i className={'fa fa-angle-right'} />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className={''}>
                                <div className={''}>
                                    <div className={''}>
                                        <div className={''}>
                                            {'Orders'}
                                            <br /> <b>{orders?.length ?? 0}</b>
                                        </div>
                                    </div>
                                    <Link className={''} to={Route.ADMIN_ORDERS}>
                                        <span className={''}>{'View Details'}</span>
                                        <span className={''}>
                                            <i className={'fa fa-angle-right'} />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className={''}>
                                <div className={''}>
                                    <div className={''}>
                                        <div className={''}>
                                            {'Users'}
                                            <br /> <b>{users?.length ?? 0}</b>
                                        </div>
                                    </div>
                                    <Link className={''} to={Route.ADMIN_USERS}>
                                        <span className={''}>{'View Details'}</span>
                                        <span className={''}>
                                            <i className={'fa fa-angle-right'} />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className={''}>
                                <div className={''}>
                                    <div className={''}>
                                        <div className={''}>
                                            {'Out of Stock'}
                                            <br /> <b>{outOfStock}</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

Dashboard.displayName = 'Dashboard';

export default Dashboard;
