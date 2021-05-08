import './styles/productReviews.scss';

import { MDBDataTable } from 'mdbreact';
import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';

import MetaData from '../../../components/util/MetaData';
import {
    clearErrors, deleteReview, deleteReviewReset, getProductReviews,
} from '../../../store/actions/productAction';
import Sidebar from '../sidebar/Sidebar';

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
        reviews.forEach((review) => {
            data.rows.push({
                id: review._id,
                rating: review.rating,
                comment: review.comment,
                user: review.name,
                actions: (
                    <>
                        <button
                            className="btn btn-danger py-1 px-2 ml-2"
                            onClick={() => deleteReviewHandler(review._id)}
                      >
                            <i className="fa fa-trash" />
                      </button>
                  </>
                ),
            });
        });
        return data;
    };

    return (
        <>
            <MetaData title="Product reviews" />
            <div className="">
                <div className="">
                    <Sidebar />
              </div>
                <div className="">
                    <>
                        <div className="">
                            <div className="">
                                <form onSubmit={submitHandler}>
                                    <div className="">
                                        <label htmlFor="productId_field">Enter Product ID</label>
                                        <input
                                            type="text"
                                            id="productId_field"
                                            className=""
                                            value={productId}
                                            onChange={(event) => setProductId(event.target.value)}
                                      />
                                  </div>

                                    <button id="search_button" type="submit" className="">
                                    SEARCH
                                    </button>
                              </form>
                          </div>
                      </div>

                        {reviews && reviews.length > 0 ? (
                            <MDBDataTable data={setReviews()} className="" bordered striped hover />
                        ) : (
                            <p className="">No reviews</p>
                        )}
                  </>
              </div>
          </div>
      </>
    );
};

export default ProductReviews;
