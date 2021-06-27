import { MDBDataTable } from 'mdbreact';
import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../../../components/util/Loader';
import MetaData from '../../../components/util/MetaData';
import { Route } from '../../../router/route';
import { myOrders } from '../../../store/actions/order/orderActions';
import './styles/listOrders.scss';

const ListOrders = () => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, orders } = useSelector((state) => state.myOrders);

    useEffect(() => {
        dispatch(myOrders());
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, error]);

    const setOrders = () => {
        const data = {
            columns: [
                {
                    label: 'Order id',
                    field: 'id',
                    sort: 'asc',
                },
                {
                    label: 'Num of items',
                    field: 'numOfItems',
                    sort: 'asc',
                },
                {
                    label: 'Amount',
                    field: 'amount',
                    sort: 'asc',
                },
                {
                    label: 'Status',
                    field: 'status',
                    sort: 'asc',
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: [],
        };
        for (const order of orders) {
            data.rows.push({
                id: order._id,
                numOfItems: order.orderItems.length,
                amount: `$${order.totalPrice}`,
                status: String(order?.orderStatus ?? '').includes('Delivered') ? (
                    <p className={'order-delivered'} style={{ color: 'green' }}>
                        {order.orderStatus}
                    </p>
                ) : (
                    <p className={'order-not-delivered'} style={{ color: 'red' }}>
                        {order.orderStatus}
                    </p>
                ),
                actions: (
                    <Link className={'order-go-to'} to={`${Route.ORDER}/${order._id}`}>
                        <i className={'fa fa-eye'} />
                    </Link>
                ),
            });
        }
        return data;
    };

    return (
        <>
            <MetaData title={'My Orders'} />
            <h1 className={'my-orders__title'}>{'My Orders'}</h1>

            {loading ? (
                <Loader />
            ) : (
                <MDBDataTable bordered hover striped className={'my-orders__table'} data={setOrders()} />
            )}
        </>
    );
};

ListOrders.displayName = 'ListOrders';

export default ListOrders;
