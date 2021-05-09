import React from 'react';
import { Link } from 'react-router-dom';

import MetaData from '../../../components/util/MetaData';
import { Route } from '../../../router/route';
import './styles/orderSuccess.scss';

const OrderSuccess = () => (
    <>
        <MetaData title={'Order Success!'} />
        <div className={'success__container'}>
            <div className={'success__image-container'}>
                <img
                    alt={'Order Success'}
                    className={'success-image'}
                    height={'200'}
                    src={'/images/order_success.png'}
                    width={'200'}
                />

                <h2 className={'success-message'}>{'Your Order has been placed successfully.'}</h2>

                <Link className={'success-go-to'} to={Route.ORDER_MY}>
                    {'Go to Orders'}
                </Link>
            </div>
        </div>
    </>
);

OrderSuccess.displayName = 'OrderSuccess';

export default OrderSuccess;
