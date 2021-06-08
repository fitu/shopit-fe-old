import React, { useEffect } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Loader from '../../../components/util/Loader';
import MetaData from '../../../components/util/MetaData';
import { clearErrors, getOrderDetails } from '../../../store/actions/order/orderActions';
import './styles/orderDetails.scss';

const OrderDetails = ({ match }) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, order } = useSelector((state) => state.orderDetails);
    const { shippingInfo, orderItems, paymentInfo, user, totalPrice, orderStatus } = order;

    useEffect(() => {
        dispatch(getOrderDetails(match.params.id));

        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, error, match.params.id]);

    const shippingDetails =
        shippingInfo &&
        `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`;

    const isPaid = paymentInfo?.status === 'succeeded';

    if (loading) {
        return <Loader />;
    }

    const paidStyle = isPaid ? { color: 'green' } : { color: 'red' };
    const paidLabel = isPaid ? 'PAID' : 'NOT PAID';

    const statusStyle = String(order?.orderStatus ?? '').includes('Delivered') ? { color: 'green' } : { color: 'red' };

    return (
        <>
            <MetaData title={'Order Details'} />
            <div className={'order__container'}>
                <h1 className={'order--id'}>
                    {'Order #'}
                    {order._id}
                </h1>

                <h4 className={'order--shipping-title'}>{'Shipping Info'}</h4>
                <p>
                    <b className={'order--shipping-name'}>{'Name:'}</b> {user?.name}
                </p>
                <p>
                    <b className={'order--shipping-phone'}>{'Phone:'}</b> {shippingInfo?.phoneNumber}
                </p>
                <p>
                    <b className={'order--shipping-address'}>{'Address:'}</b> {shippingDetails}
                </p>
                <p>
                    <b className={'order--shipping-amount'}>{'Amount:'}</b> ${totalPrice}
                </p>

                <hr />

                <h4 className={'order__payment-title'}>{'Payment'}</h4>
                <p className={'order__payment-paid'} style={paidStyle}>
                    <b>{paidLabel}</b>
                </p>

                <h4 className={'order__status-title'}>{'Order Status:'}</h4>
                <p className={'order__status-deliver'} style={statusStyle}>
                    <b>{orderStatus}</b>
                </p>

                <h4 className={'order__items-title'}>{'Order Items:'}</h4>

                <hr />
                <div className={'order__items--container'}>
                    {orderItems &&
                        orderItems.map((item) => (
                            <div className={'order__item'} key={item.product}>
                                <div className={'item-image'}>
                                    <img alt={item.name} height={'45'} src={item.images[0].url} width={'65'} />
                                </div>
                                <div className={'item-name'}>
                                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                                </div>
                                <div className={'item-price'}>
                                    <p>
                                        {'$'}
                                        {item.price}
                                    </p>
                                </div>
                                <div className={'item-quantity'}>
                                    <p>{item.quantity} Piece(s)</p>
                                </div>
                            </div>
                        ))}
                </div>
                <hr />
            </div>
        </>
    );
};

OrderDetails.displayName = 'OrderDetails';

export default OrderDetails;
