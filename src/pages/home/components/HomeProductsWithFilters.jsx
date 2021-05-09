import Slider from 'rc-slider';
import React from 'react';

import '../styles/homeProductsWithFilters.scss';
import 'rc-slider/assets/index.css';

import HomeProducts from './HomeProducts';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const HomeProductsWithFilters = ({ products, price, setPrice }) => {
    if (products.length <= 0) {
        return <h1 className={'home-container__keyword--no-results'}>{'No results to show'}</h1>;
    }

    return (
        <div className={'home-container__keyword--container'}>
            <div className={'home-container__keyword--filter'}>
                <Range
                    defaultValue={[1, 1000]}
                    marks={{
                        1: '$1',
                        1000: '$1000',
                    }}
                    max={1000}
                    min={1}
                    tipFormatter={(value) => `$${value}`}
                    tipProps={{
                        placement: 'top',
                        visible: true,
                    }}
                    value={price}
                    onChange={(price) => setPrice(price)}
                />
            </div>

            <HomeProducts products={products} />
        </div>
    );
};

HomeProductsWithFilters.displayName = 'HomeProductsWithFilters';

export default HomeProductsWithFilters;
