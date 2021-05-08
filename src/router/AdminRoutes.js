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
import { Route } from './route';
import RouterProtector from './RouterProtetor';

const AdminRoutes = () => (
    <>
        <RouterProtector path={Route.ADMIN_HOME} isAdmin component={Dashboard} />

        <RouterProtector path={`${Route.ADMIN_ORDER}/:id`} isAdmin component={ProcessOrder} />
        <RouterProtector path={Route.ADMIN_ORDERS} isAdmin component={OrderList} />

        <RouterProtector path={Route.ADMIN_PRODUCT} isAdmin component={NewProduct} exact />
        <RouterProtector path={`${Route.ADMIN_PRODUCT}/:id`} isAdmin component={UpdateProduct} />
        <RouterProtector path={Route.ADMIN_PRODUCTS} isAdmin component={ProductsList} />

        <RouterProtector path={Route.ADMIN_REVIEWS} isAdmin component={ProductReviews} />

        <RouterProtector path={Route.ADMIN_USERS} isAdmin component={UsersList} />
        <RouterProtector path={`${Route.ADMIN_USER}/:id`} isAdmin component={UpdateUser} />
  </>
);

export default AdminRoutes;
