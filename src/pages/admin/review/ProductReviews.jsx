import { MDBDataTable } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import MetaData from '../../../components/util/MetaData';
import { deleteReview, getProductReviews } from '../../../store/actions/product/productAction';
import Sidebar from '../sidebar/Sidebar';
import './styles/productReviews.scss';

const ProductReviews = ({ history }) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const [productId, setProductId] = useState('');

    const { error, reviews = [] } = useSelector((state) => state.productReviews);
    const { isDeleted, error: deleteError } = useSelector((state) => state.review);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (deleteError) {
            alert.error(deleteError);
            dispatch(clearErrors());
        }

        if (isDeleted) {
            alert.success('Review deleted succesfully!');
            dispatch(deleteReviewReset());
        }

        if (productId !== '') {
            dispatch(getProductReviews(productId));
        }
    }, [dispatch, alert, error, history, productId, isDeleted, deleteError]);

    const deleteReviewHandler = (id) => {
        dispatch(deleteReview(id, productId));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(getProductReviews(productId));
    };

    const setReviews = () => {
        const data = {
            columns: [
                {
                    label: 'Review id',
                    field: 'id',
                    sort: 'asc',
                },
                {
                    label: 'Rating',
                    field: 'rating',
                    sort: 'asc',
                },
                {
                    label: 'Comment',
                    field: 'comment',
                    sort: 'asc',
                },
                {
                    label: 'User',
                    field: 'user',
                    sort: 'asc',
                },
                {
                    label: 'Actions',
                    field: 'actions',
                },
            ],
            rows: [],
        };
        for (const review of reviews) {
            data.rows.push({
                id: review._id,
                rating: review.rating,
                comment: review.comment,
                user: review.name,
                actions: (
                    <button
                        className={'btn btn-danger py-1 px-2 ml-2'}
                        type={'button'}
                        onClick={() => deleteReviewHandler(review._id)}
                    >
                        <i className={'fa fa-trash'} />
                    </button>
                ),
            });
        }
        return data;
    };

    return (
        <>
            <MetaData title={'Product reviews'} />
            <div className={''}>
                <div className={''}>
                    <Sidebar />
                </div>
                <div className={''}>
                    <div className={''}>
                        <div className={''}>
                            <form onSubmit={submitHandler}>
                                <div className={''}>
                                    <label htmlFor={'productId_field'}>{'Enter Product ID'}</label>
                                    <input
                                        className={''}
                                        id={'productId_field'}
                                        type={'text'}
                                        value={productId}
                                        onChange={(event) => setProductId(event.target.value)}
                                    />
                                </div>

                                <button className={''} id={'search_button'} type={'submit'}>
                                    {'SEARCH'}
                                </button>
                            </form>
                        </div>
                    </div>

                    {reviews && reviews.length > 0 ? (
                        <MDBDataTable bordered hover striped className={''} data={setReviews()} />
                    ) : (
                        <p className={''}>{'No reviews'}</p>
                    )}
                </div>
            </div>
        </>
    );
};

ProductReviews.displayName = 'ProductReviews';

export default ProductReviews;
