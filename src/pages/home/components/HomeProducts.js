import '../styles/homeProducts.scss';

import React from 'react';

import Product from '../../product/components/Product';

const HomeProducts = ({ products }) => (
    <div className="home-container__products">
        {products
            && products.map((product) => (
                <div className="home-container__products--item">
                    <Product key={product._id} product={product} />
              </div>
            ))}
  </div>
);

export default HomeProducts;
