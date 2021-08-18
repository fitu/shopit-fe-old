import React, { useEffect, useState, useContext } from 'react';
import { useAlert } from 'react-alert';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../components/util/Loader';
import MetaData from '../../components/util/MetaData';
import { getProducts } from '../../store/actions/product/productAction';
import { LoadingContext } from '../../Context/loadingContext';

import HomeProducts from './components/HomeProducts';
import HomeProductsWithFilters from './components/HomeProductsWithFilters';
import './styles/home.scss';

const Home = ({ match }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [price, setPrice] = useState([1, 1000]);
    const {loading1, setLoading}= useContext(LoadingContext);

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, products, productsCount, resultsPerPage, error } = useSelector((state) => state.product);
    const { keyword } = match.params;

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
            return;
        }
        dispatch(getProducts(keyword, price, currentPage));
    }, [dispatch, alert, error, keyword, price, currentPage]);

    useEffect(() => {
        setLoading({loading1: loading})
        {console.log(loading);}
        {console.log(loading1)}
        {
            console.log(setLoading);
        }
    }, [loading]);

    const setCurrentPageNumber = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className={'home'}>
            <MetaData title={'Buy Best Products Online'} />
            <h1 className={'home--title'}>{'Latest Products'}</h1>

            {keyword ? (
                <HomeProductsWithFilters price={price} products={products} setPrice={setPrice} />
            ) : (
                <HomeProducts products={products} />
            )}

            {resultsPerPage <= productsCount && (
                <Pagination
                    activePage={currentPage}
                    className={'home__pagination'}
                    firstPageText={'First'}
                    itemClass={'home__pagination--page-item'}
                    itemsCountPerPage={resultsPerPage}
                    lastPageText={'Last'}
                    linkClass={'home__pagination--page-link'}
                    nextPageText={'Next'}
                    prevPageText={'Prev'}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNumber}
                />
            )}
        </div>
    );
};

Home.displayName = 'Home';

export default Home;
