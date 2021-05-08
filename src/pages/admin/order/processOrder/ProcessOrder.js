import './styles/processOrder.scss';

import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../../../../components/util/Loader';
import MetaData from '../../../../components/util/MetaData';
import { OrderStatus } from '../../../../models/orderStatus';
import {
    clearErrors, getOrderDetails, updateOrder, updateOrderReset,
} from '../../../../store/actions/orderActions';
import Sidebar from '../../sidebar/Sidebar';

const ProcessOrder = ({ match }) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const [status, setStatus] = useState('');

    const { loading, order } = useSelector((state) => state.orderDetails);
    const {
        shippingInfo, orderItems, paymentInfo, user, totalPrice, orderStatus,
    } = order;
    const { error, isUpdated } = useSelector((state) => state.order);

    useEffect(() => {
        dispatch(getOrderDetails(match.params.id));

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if (isUpdated) {
            alert.success('Order updated succesfully!');
            dispatch(updateOrderReset());
        }
    }, [dispatch, alert, error, isUpdated, match.params.id]);

    const updateOrderHanlder = (id) => {
        const formData = new FormData();
        formData.set('status', status);

        dispatch(updateOrder(id, formData));
    };

    const shippingDetails = shippingInfo
        && `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`;
    const isPaid = paymentInfo && paymentInfo.status === 'succeeded';

    return (
        <>
            <MetaData title={`Process order #${order?._id}`} />
            <div className="">
                <div className="">
                    <Sidebar />
              </div>
                <div className="">
                    <>
                        {loading ? (
                            <Loader />
                        ) : (
                            <div className="">
                                <div className="">
                                    <h2 className="">
                                    Order #{order?._id}
                                  </h2>
                                    <h4 className="">Shipping Info</h4>
                                    <p>
                                        <b>Name: </b>
                                    {' '}
                                    {user?.name}
                                  </p>
                                    <p>
                                        <b>Phone: </b>
                                    {' '}
                                    {shippingInfo?.phoneNumber}
                                  </p>
                                    <p className="">
                                        <b>Address:</b>
                                        {shippingDetails}
                                  </p>
                                    <p>
                                        <b>Amount: </b>
                                    {' '}
                                    ${totalPrice}
                                  </p>
                                    <hr />
                                    <h4 className="">Payment</h4>
                                    <p className={isPaid ? 'text-green-500' : 'text-red-600'}>
                                        <b>{isPaid ? 'PAID' : 'NOT PAID'}</b>
                                  </p>
                                    <h4 className="">Stripe ID</h4>
                                    <p>
                                        <b>{paymentInfo?.id}</b>
                                  </p>
                                    <h4 className="">Order Status:</h4>
                                    <p
                                        className={
                                            String(order?.orderStatus ?? '').includes('Delivered')
                                                ? 'text-green-500'
                                                : 'text-red-600'
                                        }
                                  >
                                        <b>{orderStatus}</b>
                                  </p>
                                    <h4 className="">Order Items:</h4>
                                    <hr />
                                    <div className="">
                                        {orderItems
                                            && orderItems.map((item) => (
                                                <div className="" key={item.product}>
                                                    <div className="">
                                                        <img
                                                            src={item.images[0].url}
                                                            alt={item.name}
                                                            height="45"
                                                            width="65"
                                                      />
                                                  </div>
                                                    <div className="">
                                                        <Link to={`/products/${item.product}`}>{item.name}</Link>
                                                  </div>
                                                    <div className="">
                                                        <p>
                                                        ${item.price}
                                                      </p>
                                                  </div>
                                                    <div className="">
                                                        <p>
                                                        {item.quantity}
                                                            {' '}
                                                        Piece(s)
</p>
                                                  </div>
                                              </div>
                                            ))}
                                  </div>
                                    <hr />
                              </div>
                                <div className="">
                                    <h4 className="">Status</h4>
                                    <div className="">
                                        <select
                                            className=""
                                            name="status"
                                            value={status}
                                            onChange={(event) => setStatus(event.target.value)}
                                      >
                                            {Object.values(OrderStatus).map((status) => (
                                                <option key={status} value={status}>
                                                    {status}
                                              </option>
                                            ))}
                                      </select>
                                  </div>
                                    <button className="" onClick={() => updateOrderHanlder(order._id)}>
                                    Update Status
                                    </button>
                              </div>
                          </div>
                        )}
                  </>
              </div>
          </div>
      </>
    );
};

export default ProcessOrder;
