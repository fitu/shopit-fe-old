import '../styles/product.scss';

import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

import { Route } from '../../../router/route';

const Product = ({ product }) => {
    console.log(product);
    return (
      <div className="product">
          <img className="product__image" alt="Product images" src={product.images[0].url} />

          <h5 className="product__name">
              <Link to={`${Route.PRODUCT}/${product._id}`}>{product.name}</Link>
            </h5>
          <div className="product__ratting--container">
              <div className="product__ratting--stars">
                  <ReactStars
                      count={5}
                      value={product.ratings}
                      isHalf
                      emptyIcon={<i className="far fa-star" />}
                      halfIcon={<i className="fa fa-star-half-alt" />}
                      fullIcon={<i className="fa fa-star" />}
                      activeColor="#febd69"
                    />
                </div>
              <span className="product__ratting--num-of-reviews">
                  ({product.numOfReviews}
                  )
</span>
            </div>
          <p className="product__price">
              ${product.price}
            </p>
          <Link to={`${Route.PRODUCT}/${product._id}`} className="product__details">
              View Details
        </Link>
        </div>
    );
};

export default Product;
