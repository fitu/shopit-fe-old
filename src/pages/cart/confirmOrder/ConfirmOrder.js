import './styles/confirmOrder.scss';

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import MetaData from '../../../components/util/MetaData';
import { Route } from '../../../router/route';
import { StorageKeys } from '../../../store/repository/repository';
import CheckoutSteps from '../components/CheckoutSteps';

const ConfirmOrder = ({ history }) => {
    const { cartItems, shippingInfo } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.auth);

    const itemsPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shippingPrice = itemsPrice > 200 ? 0 : 25;
    const taxPrice = Number((0.05 * itemsPrice).toFixed(2));
    const totalPrice = itemsPrice + shippingPrice + taxPrice;

    const proceedToPayment = () => {
        const data = {
            itemsPrice: itemsPrice.toFixed(2),
            shippingPrice,
            taxPrice,
            totalPrice,
        };

        sessionStorage.setItem(StorageKeys.ORDER_INFO_KEY, JSON.stringify(data));
        history.push(Route.CHECKOUT_STEP_PAYMENT);
    };

    return (
        <>
            <MetaData title="Confirm Order" />

            <div className="confirm__container">
                <div className="confirm__steps">
                    <CheckoutSteps shippingStep confirmOrderStep />
              </div>

                <div className="shipping--container">
                    <h4 className="shipping-title">Shipping Info</h4>
                    <p className="shipping-name">
                        <b>Name: </b>
                        {user?.name}
                  </p>
                    <p className="shipping-phone">
                        <b>Phone: </b>
                    {' '}
                    {shippingInfo.phoneNumber}
                  </p>
                    <p className="shipping-address">
                        <b>Address: </b>
                    {' '}
                        {`${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.postalCode}, ${shippingInfo.country}`}
                  </p>
                    <hr />
                    <h4 className="shipping-items">Your Cart Items:</h4>

                    {cartItems.map((item) => (
                        <div key={item.product}>
                            <hr />
                            <div className="item__container">
                                <div className="item-image">
                                    <img src={item.images[0].url} alt="Laptop" height="45" width="65" />
                              </div>
                                <div className="item-name">
                                    <Link to={`${Route.PRODUCT}/${item.product}`}>{item.name}</Link>
                              </div>
                                <div className="item-quantity">
                                    <p>
                                        {item.quantity}
                                    {' '}
                                    x ${item.price}
                                    {' '}
                                    ={' '}
                                        <b>
                                        ${(item.quantity * item.price).toFixed(2)}
                                      </b>
                                  </p>
                              </div>
                          </div>
                            <hr />
                      </div>
                    ))}
              </div>

                <div className="order--container">
                    <h4 className="order--title">Order Summary</h4>
                    <hr />
                    <p className="order--subtotal">
                    Subtotal: <span className="order--subtotal-price">
                        ${itemsPrice}
                                </span>
                  </p>
                    <p className="order--shipping">
                    Shipping: <span className="order--shipping-price">
                        ${shippingPrice}
                                </span>
                  </p>
                    <p className="order--tax">
                    Tax: <span className="order--tax-price">
                        ${taxPrice}
                           </span>
                  </p>
                    <hr />
                    <p className="order--total">
                    Total: <span className="order--total-price">
                        ${totalPrice}
                             </span>
                  </p>
                    <hr />
                    <button
                        className="order--proceed"
                        onClick={proceedToPayment}
                  >
                      Proceed to Payment
                  </button>
              </div>
          </div>
      </>
    );
};

export default ConfirmOrder;
