import React from 'react';
import { Link } from 'react-router-dom';

import { Route } from '../../../router/route';
import '../styles/checkoutSteps.scss';

const CheckoutSteps = ({ shippingStep, confirmOrderStep, paymentStep }) => (
    <div className={'steps__container'}>
        {shippingStep ? (
            <Link className={'step-shipping'} to={Route.CHECKOUT_STEP_SHIPPING}>
                <div className={'step-active-before'} />
                <div className={'step-active-text'}>{'Shipping'}</div>
                <div className={'step-active-after'} />
            </Link>
        ) : (
            <Link disabled to={'#'}>
                <div className={'step-deactive-before'} />
                <div className={'step-deactive-text'}>{'Shipping'}</div>
                <div className={'step-deactive-after'} />
            </Link>
        )}

        {confirmOrderStep ? (
            <Link className={'step-confirm'} to={Route.CHECKOUT_STEP_CONFIRM}>
                <div className={'step-active-before'} />
                <div className={'step-active-text'}>{'Confirm Order'}</div>
                <div className={'step-active-after'} />
            </Link>
        ) : (
            <Link disabled to={'#'}>
                <div className={'step-deactive-before'} />
                <div className={'step-deactive-text'}>{'Confirm Order'}</div>
                <div className={'step-deactive-after'} />
            </Link>
        )}

        {paymentStep ? (
            <Link className={'step-payment'} to={Route.CHECKOUT_STEP_PAYMENT}>
                <div className={'step-active-before'} />
                <div className={'step-active-text'}>{'Payment'}</div>
                <div className={'step-active-after'} />
            </Link>
        ) : (
            <Link disabled to={'#'}>
                <div className={'step-deactive-before'} />
                <div className={'step-deactive-text'}>{'Payment'}</div>
                <div className={'step-deactive-after'} />
            </Link>
        )}
    </div>
);

CheckoutSteps.displayName = 'CheckoutSteps';

export default CheckoutSteps;
