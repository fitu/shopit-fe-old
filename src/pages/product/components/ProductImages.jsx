import React from 'react';
import { Carousel } from 'react-bootstrap';

import '../styles/productImages.scss';

const ProductImages = ({ product }) => (
    <Carousel pause={'hover'}>
        {product.images &&
            product.images.map((image) => (
                <Carousel.Item key={image.public_id}>
                    <img alt={product.title} className={'product-details--image'} src={image.url} />
                </Carousel.Item>
            ))}
    </Carousel>
);

ProductImages.displayName = 'ProductImages';

export default ProductImages;
