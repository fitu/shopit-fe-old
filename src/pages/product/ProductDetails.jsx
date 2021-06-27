import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../../components/util/Loader';
import MetaData from '../../components/util/MetaData';
import { getProductDetails } from '../../store/actions/product/productAction';
import ListReviews from '../review/ListReviews';

import AddReviewModal from './components/AddReviewModal';
import ProductImages from './components/ProductImages';
import ProductInfo from './components/ProductInfo';
import './styles/productDetails.scss';

const ProductDetails = ({ match }) => {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, product } = useSelector((state) => state.productDetails);
    const { error: reviewError, success } = useSelector((state) => state.newReview);

    useEffect(() => {
        if (error || reviewError) {
            alert.error(error);
            dispatch(clearErrors());
            return;
        }

        if (success) {
            alert.success('Review posted succesfully!');
            dispatch(newReviewReset());
        }
        dispatch(getProductDetails(match.params.id));
    }, [dispatch, alert, error, reviewError, success, match.params.id]);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <MetaData title={product.name} />

            <div className={'product-details__container'}>
                <div className={'images--container'}>
                    <ProductImages product={product} />
                </div>
                <div className={'info--container'}>
                    <ProductInfo match={match} product={product} showModal={setShowModal} />
                </div>
                {product.reviews?.length > 0 && (
                    <div className={'reviews--container'}>
                        <ListReviews reviews={product.reviews} />
                    </div>
                )}
            </div>

            {showModal && (
                <div className={'modal--container'}>
                    <AddReviewModal match={match} showModal={setShowModal} />
                </div>
            )}
        </>
    );
};

ProductDetails.displayName = 'ProductDetails';

export default ProductDetails;
