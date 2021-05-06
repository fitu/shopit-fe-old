import '../styles/checkoutSteps.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { Route } from '../../../router/route';

const CheckoutSteps = ({ shippingStep, confirmOrderStep, paymentStep }) => {
    return (
        <div className="steps__container">
            {shippingStep ? (
                <Link to={Route.CHECKOUT_STEP_SHIPPING} className="step-shipping">
                    <div className="step-active-before"></div>
                    <div className="step-active-text">Shipping</div>
                    <div className="step-active-after"></div>
                </Link>
            ) : (
                <Link to="#" disabled>
                    <div className="step-deactive-before"></div>
                    <div className="step-deactive-text">Shipping</div>
                    <div className="step-deactive-after"></div>
                </Link>
            )}

            {confirmOrderStep ? (
                <Link to={Route.CHECKOUT_STEP_CONFIRM} className="step-confirm">
                    <div className="step-active-before"></div>
                    <div className="step-active-text">Confirm Order</div>
                    <div className="step-active-after"></div>
                </Link>
            ) : (
                <Link to="#" disabled>
                    <div className="step-deactive-before"></div>
                    <div className="step-deactive-text">Confirm Order</div>
                    <div className="step-deactive-after"></div>
                </Link>
            )}

            {paymentStep ? (
                <Link to={Route.CHECKOUT_STEP_PAYMENT} className="step-payment">
                    <div className="step-active-before"></div>
                    <div className="step-active-text">Payment</div>
                    <div className="step-active-after"></div>
                </Link>
            ) : (
                <Link to="#" disabled>
                    <div className="step-deactive-before"></div>
                    <div className="step-deactive-text">Payment</div>
                    <div className="step-deactive-after"></div>
                </Link>
            )}
        </div>
    );
};

export default CheckoutSteps;
