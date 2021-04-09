import React from 'react';

import RouterProtector from './RouterProtetor';
import Dashboard from '../../pages/admin/Dashboard';
import OrderList from '../../pages/admin/order/OrderList';
import ProcessOrder from '../../pages/admin/order/ProcessOrder';
import NewProduct from '../../pages/admin/product/NewProduct';
import ProductsList from '../../pages/admin/product/ProductsList';
import UpdateProduct from '../../pages/admin/product/UpdateProduct';
import ProductReviews from '../../pages/admin/review/ProductReviews';
import UpdateUser from '../../pages/admin/user/UpdateUser';
import UsersList from '../../pages/admin/user/UsersList';
import { Route } from './route';

const AdminRoutes = () => {
    return (
        <>
            <RouterProtector path={Route.ADMIN_HOME} isAdmin={true} component={Dashboard} />

            <RouterProtector path={`${Route.ADMIN_ORDER}/:id`} isAdmin={true} component={ProcessOrder} />
            <RouterProtector path={Route.ADMIN_ORDERS} isAdmin={true} component={OrderList} />

            <RouterProtector path={Route.ADMIN_PRODUCT} isAdmin={true} component={NewProduct} exact />
            <RouterProtector path={`${Route.ADMIN_PRODUCT}/:id`} isAdmin={true} component={UpdateProduct} />
            <RouterProtector path={Route.ADMIN_PRODUCTS} isAdmin={true} component={ProductsList} />

            <RouterProtector path={Route.ADMIN_REVIEWS} isAdmin={true} component={ProductReviews} />

            <RouterProtector path={Route.ADMIN_USERS} isAdmin={true} component={UsersList} />
            <RouterProtector path={`${Route.ADMIN_USER}/:id`} isAdmin={true} component={UpdateUser} />
        </>
    );
};

export default AdminRoutes;
