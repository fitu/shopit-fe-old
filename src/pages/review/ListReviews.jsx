import React from 'react';
import ReactStars from 'react-rating-stars-component';

import './styles/listReviews.scss';

const ListReviews = ({ reviews }) => (
    <div className={'reviews__container'}>
        <h3 className={'reviews--title'}>{"Other's Reviews:"}</h3>
        <hr />
        {reviews?.map((review) => (
            <div className={'review--container'} key={review._id}>
                <ReactStars
                    isHalf
                    activeColor={'#febd69'}
                    count={5}
                    emptyIcon={<i className={'far fa-star'} />}
                    fullIcon={<i className={'fa fa-star'} />}
                    halfIcon={<i className={'fa fa-star-half-alt'} />}
                    value={review.rating}
                />
                <p className={'review-by'}>
                    {'by'}
                    {review.name}
                </p>
                <p className={'review-comment'}>{review.comment}</p>
                <hr />
            </div>
        ))}
    </div>
);

ListReviews.displayName = 'ListReviews';

export default ListReviews;
