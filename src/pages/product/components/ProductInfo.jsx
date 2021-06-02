import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';

import { addItemToCart } from '../../../store/actions/cart/cartActions';
import '../styles/productInfo.scss';

const ProductInfo = ({ product, match, showModal }) => {
    const [quantity, setQuantity] = useState(1);

    const alert = useAlert();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const stockStyle = product.stock > 0 ? { color: 'green' } : { color: 'red' };
    const stockLabel = product.stock > 0 ? 'In Stock' : 'Out of Stock';

    const decreaseQuantity = () => {
        const count = document.querySelector('#count');
        if (count.valueAsNumber <= 1) {
            return;
        }

        setQuantity((current) => current - 1);
    };

    const increaseQuantity = () => {
        const count = document.querySelector('#count');
        if (count.valueAsNumber >= product.stock) {
            return;
        }

        setQuantity((current) => current + 1);
    };

    const addToCart = () => {
        dispatch(addItemToCart(match.params.id, quantity));
        alert.success('Item added to cart!');
    };

    return (
        <div className={'product-info__container'}>
            <h3 className={'title'}>{product.name}</h3>
            <p className={'product-id'}>
                {'Product #'}
                {product._id}
            </p>
            <hr />
            <div className={'rating'}>{product.ratings}</div>
            <span className={'num-of-reviews'} id={'num-of-reviews'}>
                {'('}
                {product.numOfReviews} Reviews)
            </span>
            <hr />
            <p className={'price'}>
                {'$'}
                {product.price}
            </p>
            <div className={'quantity-container'}>
                <span className={'quantity-decrease'} onClick={decreaseQuantity}>
                    {'-'}
                </span>
                <input readOnly className={'quantity'} id={'count'} type={'number'} value={quantity} />
                <span className={'quantity-increase'} onClick={increaseQuantity}>
                    {'+'}
                </span>
            </div>
            <button className={'add-to-cart'} disable={product.stock === 0} type={'button'} onClick={addToCart}>
                {'Add to Cart'}
            </button>
            <hr />
            <p className={'status_label'}>
                {'Status:'}
                <span className={'status'} style={stockStyle}>
                    {stockLabel}
                </span>
            </p>
            <hr />
            <h4 className={'description-label'}>{'Description:'}</h4>
            <p className={'description'}>{product.description}</p>
            <hr />
            <p className={'seller-label'}>
                {'Sold by: '}
                <strong className={'seller'}>{product.seller}</strong>
            </p>
            {user ? (
                <button className={'submit-review'} type={'button'} onClick={() => showModal(true)}>
                    {'Submit Your Review'}
                </button>
            ) : (
                <div className={'login'} type={'alert'}>
                    {'Login to post your review.'}
                </div>
            )}
        </div>
    );
};

ProductInfo.displayName = 'ProductInfo';

export default ProductInfo;
