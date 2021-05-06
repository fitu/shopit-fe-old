import './styles/orderList.scss';
import { MDBDataTable } from 'mdbreact';
import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Sidebar from '../../sidebar/Sidebar';
import Loader from '../../../../components/util/Loader';
import MetaData from '../../../../components/util/MetaData';

import { clearErrors, deleteOrder, deleteOrderReset, getAllOrders } from '../../../../store/actions/orderActions';
import { Route } from '../../../../router/route';

const OrderList = ({ history }) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, orders = [] } = useSelector((state) => state.allOrders);
    const { isDeleted } = useSelector((state) => state.order);

    useEffect(() => {
        dispatch(getAllOrders());
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isDeleted) {
            alert.success('Order deleted succesfully!');
            history.push(Route.ADMIN_ORDERS);
            dispatch(deleteOrderReset());
        }
    }, [dispatch, alert, error, history, isDeleted]);

    const deleteOrderHandler = (id) => {
        dispatch(deleteOrder(id));
    };

    const setOrders = () => {
        const data = {
            columns: [
                {
                    label: 'Order id',
                    field: 'id',
                    sort: 'asc',
                },
                {
                    label: 'Num of Items',
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
        orders.forEach((order) => {
            data.rows.push({
                id: order._id,
                numOfItems: order.orderItems.length,
                amount: `$${order.totalPrice}`,
                status: String(order?.orderStatus ?? '').includes('Delivered') ? (
                    <p style={{ color: 'green' }}>{order.orderStatus}</p>
                ) : (
                    <p style={{ color: 'red' }}>{order.orderStatus}</p>
                ),
                actions: (
                    <>
                        <Link to={`${Route.ADMIN_ORDER}/${order._id}`} className="btn btn-primary py-1 px-2">
                            <i className="fa fa-eye"></i>
                        </Link>
                        <button className="btn btn-danger py-1 px-2 ml-2" onClick={() => deleteOrderHandler(order._id)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </>
                ),
            });
        });
        return data;
    };

    return (
        <>
            <MetaData title="All orders" />
            <div className="">
                <div className="">
                    <Sidebar />
                </div>
                <div className="">
                    <>
                        <h1 className="">All orders</h1>
                        {loading ? <Loader /> : <MDBDataTable data={setOrders()} className="" bordered striped hover />}
                    </>
                </div>
            </div>
        </>
    );
};

export default OrderList;