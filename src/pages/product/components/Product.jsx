import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

import { Route } from '../../../router/route';
import '../styles/product.scss';

const Product = ({ product }) => {
    return (
        <div className={'product'}>
            <img alt={'Product images'} className={'product__image'} src={product.images[0].url} />

            <h5 className={'product__name'}>
                <Link to={`${Route.PRODUCT}/${product._id}`}>{product.name}</Link>
            </h5>
            <div className={'product__ratting--container'}>
                <div className={'product__ratting--stars'}>
                    <ReactStars
                        isHalf
                        activeColor={'#febd69'}
                        count={5}
                        emptyIcon={<i className={'far fa-star'} />}
                        fullIcon={<i className={'fa fa-star'} />}
                        halfIcon={<i className={'fa fa-star-half-alt'} />}
                        value={product.ratings}
                    />
                </div>
                <span className={'product__ratting--num-of-reviews'}>
                    {'('}
                    {product.numOfReviews}
                    {')'}
                </span>
            </div>
            <p className={'product__price'}>
                {'$'}
                {product.price}
            </p>
            <Link className={'product__details'} to={`${Route.PRODUCT}/${product._id}`}>
                {'View Details'}
            </Link>
        </div>
    );
};

Product.displayName = 'Product';

export default Product;
