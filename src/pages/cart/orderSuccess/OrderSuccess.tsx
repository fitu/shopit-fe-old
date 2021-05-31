import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import MetaData from '../../../components/util/MetaData';
import Strings from '../../../resources/strings/pages/cart/orderSucess/orderSucessStrings';
import { Route } from '../../../router/route';
import './styles/orderSuccess.scss';

const OrderSuccess: React.FC = (): ReactElement => (
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

                <h2 className={'success-message'}>{Strings.successMessage}</h2>

                <Link className={'success-go-to'} to={Route.ORDER_MY}>
                    {Strings.goToOrders}
                </Link>
            </div>
        </div>
    </>
);

OrderSuccess.displayName = 'OrderSuccess';

export default OrderSuccess;
