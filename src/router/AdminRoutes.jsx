import React from 'react';

import Dashboard from '../pages/admin/dashboard/Dashboard';
import OrderList from '../pages/admin/order/orderList/OrderList';
import ProcessOrder from '../pages/admin/order/processOrder/ProcessOrder';
import NewProduct from '../pages/admin/product/newProduct/NewProduct';
import ProductsList from '../pages/admin/product/productsList/ProductsList';
import UpdateProduct from '../pages/admin/product/updateProduct/UpdateProduct';
import ProductReviews from '../pages/admin/review/ProductReviews';
import UpdateUser from '../pages/admin/user/updateUser/UpdateUser';
import UsersList from '../pages/admin/user/usersList/UsersList';

import { Route } from './route.ts';
import RouterProtector from './RouterProtector';

const AdminRoutes = () => (
    <>
        <RouterProtector isAdmin component={Dashboard} path={Route.ADMIN_HOME} />
        <RouterProtector isAdmin component={ProcessOrder} path={`${Route.ADMIN_ORDER}/:id`} />
        <RouterProtector isAdmin component={OrderList} path={Route.ADMIN_ORDERS} />
        <RouterProtector exact isAdmin component={NewProduct} path={Route.ADMIN_PRODUCT} />
        <RouterProtector isAdmin component={UpdateProduct} path={`${Route.ADMIN_PRODUCT}/:id`} />
        <RouterProtector isAdmin component={ProductsList} path={Route.ADMIN_PRODUCTS} />
        <RouterProtector isAdmin component={ProductReviews} path={Route.ADMIN_REVIEWS} />
        <RouterProtector isAdmin component={UsersList} path={Route.ADMIN_USERS} />
        <RouterProtector isAdmin component={UpdateUser} path={`${Route.ADMIN_USER}/:id`} />
    </>
);

AdminRoutes.displayName = 'AdminRoutes';

export default AdminRoutes;
