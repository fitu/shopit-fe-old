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

const AdminRoutes = () => {
    return (
        <>
            <RouterProtector path="/dashboard" isAdmin={true} component={Dashboard} />

            <RouterProtector path="/admin/order/:id" isAdmin={true} component={ProcessOrder} />
            <RouterProtector path="/admin/orders" isAdmin={true} component={OrderList} />

            <RouterProtector path="/admin/product" isAdmin={true} component={NewProduct} exact />
            <RouterProtector path="/admin/product/:id" isAdmin={true} component={UpdateProduct} />
            <RouterProtector path="/admin/products" isAdmin={true} component={ProductsList} />

            <RouterProtector path="/admin/reviews" isAdmin={true} component={ProductReviews} />

            <RouterProtector path="/admin/users" isAdmin={true} component={UsersList} />
            <RouterProtector path="/admin/user/:id" isAdmin={true} component={UpdateUser} />
        </>
    );
};

export default AdminRoutes;
