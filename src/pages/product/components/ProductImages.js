import '../styles/productImages.scss';

import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductImages = ({ product }) => (
    <Carousel pause="hover">
        {product.images
            && product.images.map((image) => (
                <Carousel.Item key={image.public_id}>
                    <img className="product-details--image" src={image.url} alt={product.title} />
              </Carousel.Item>
            ))}
  </Carousel>
);

export default ProductImages;
