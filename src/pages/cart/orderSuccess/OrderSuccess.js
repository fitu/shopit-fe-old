import './styles/orderSuccess.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import MetaData from '../../../components/util/MetaData';
import { Route } from '../../../router/route';

const OrderSuccess = () => (
    <>
        <MetaData title="Order Success!" />
        <div className="success__container">
            <div className="success__image-container">
                <img
                    className="success-image"
                    src="/images/order_success.png"
                    alt="Order Success"
                    width="200"
                    height="200"
              />

                <h2 className="success-message">Your Order has been placed successfully.</h2>

                <Link className="success-go-to" to={Route.ORDER_MY}>Go to Orders</Link>
          </div>
      </div>
  </>
);

export default OrderSuccess;
