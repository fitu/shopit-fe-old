import 'rc-slider/assets/index.css';

import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'rc-slider';

import Loader from '../../components/util/Loader';
import MetaData from '../../components/util/MetaData';
import Product from '../product/Product';

import { clearErrors, getProducts } from '../../store/actions/productAction';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Home = ({ match }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([1, 1000]);

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, products, productsCount, resultsPerPage, error } = useSelector((state) => state.products);
    const keyword = match.params.keyword;

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
            return;
        }

        dispatch(getProducts(keyword, price, currentPage));
    }, [dispatch, alert, error, keyword, price, currentPage]);

    const setCurrentPageNo = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <MetaData title={'Buy Best Products Online'} />
                    <h1 id="products_heading">Latest Products</h1>

                    <section id="products" className="container mt-5">
                        <div className="row">
                            {keyword ? (
                                <>
                                    <div className="col-6 col-md-3 mt-5 mb-5">
                                        <div className="px-5">
                                            <Range
                                                marks={{
                                                    1: '$1',
                                                    1000: '$1000',
                                                }}
                                                min={1}
                                                max={1000}
                                                defaultValue={[1, 1000]}
                                                tipFormatter={(value) => `$${value}`}
                                                tipProps={{
                                                    placement: 'top',
                                                    visible: true,
                                                }}
                                                value={price}
                                                onChange={(price) => setPrice(price)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-9">
                                        <div className="row">
                                            {products &&
                                                products.map((product) => (
                                                    <Product key={product._id} product={product} col={4} />
                                                ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                products &&
                                products.map((product) => <Product key={product._id} product={product} col={3} />)
                            )}
                        </div>
                    </section>

                    {resultsPerPage <= productsCount && (
                        <div className="d-flex justify-content-center mt-5">
                            <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={resultsPerPage}
                                totalItemsCount={productsCount}
                                onChange={setCurrentPageNo}
                                nextPageText={'Next'}
                                prevPageText={'Prev'}
                                firstPageText={'First'}
                                lastPageText={'Last'}
                                itemClass="page-item"
                                linkClass="page-link"
                            />
                        </div>
                    )}
                </>
            )}
        </>
    );
};

export default Home;
