import React from 'react';

import Product from '../../product/components/Product';
import '../styles/homeProducts.scss';

const HomeProducts = ({ products }) => (
    <div className={'home-container__products'}>
        {products &&
            products.map((product) => (
                <div key={product._id} className={'home-container__products--item'}>
                    <Product key={product._id} product={product} />
                </div>
            ))}
    </div>
);

HomeProducts.displayName = 'HomeProducts';

export default HomeProducts;
