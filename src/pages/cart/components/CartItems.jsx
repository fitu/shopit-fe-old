import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Route } from '../../../router/route';
import { addItemToCart, removeItemFromCart } from '../../../store/actions/cart/cartActions';
import '../styles/cartItems.scss';

const CartItems = ({ cartItems }) => {
    const dispatch = useDispatch();

    const removeCartItemHandler = (id) => {
        dispatch(removeItemFromCart(id));
    };

    const decreaseQuantity = (id, quantity) => {
        const newQty = quantity - 1;
        if (newQty <= 0) {
            return;
        }

        dispatch(addItemToCart(id, newQty));
    };

    const increaseQuantity = (id, quantity, stock) => {
        const newQty = quantity + 1;
        if (newQty > stock) {
            return;
        }

        dispatch(addItemToCart(id, newQty));
    };

    return (
        <div className={'cart__items--container'}>
            {cartItems.map((item) => (
                <div key={item.product}>
                    <hr />
                    <div className={'cart__item--container'}>
                        <div className={'item--image'}>
                            <img alt={''} height={'90'} src={item.images[0].url} width={'115'} />
                        </div>
                        <div className={'item--name'}>
                            <Link to={`${Route.PRODUCT}/${item.product}`}>{item.name}</Link>
                        </div>
                        <div className={'item--price-container'}>
                            <p className={'item--price'}>
                                {'$'}
                                {item.price}
                            </p>
                        </div>
                        <div className={'item--quantities'}>
                            <span
                                className={'item--decrease-quantity'}
                                onClick={() => decreaseQuantity(item.product, item.quantity)}
                            >
                                {'-'}
                            </span>
                            <input readOnly className={'item--quantity'} type={'number'} value={item.quantity} />
                            <span
                                className={'item--increase-quantity'}
                                onClick={() => increaseQuantity(item.product, item.quantity, item.stock)}
                            >
                                {'+'}
                            </span>
                        </div>
                        <div className={'item--remove-container'}>
                            <i className={'item--remove'} onClick={() => removeCartItemHandler(item.product)} />
                        </div>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    );
};

CartItems.displayName = 'CartItems';

export default CartItems;
