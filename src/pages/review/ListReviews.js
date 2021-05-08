import './styles/listReviews.scss';

import React from 'react';
import ReactStars from 'react-rating-stars-component';

const ListReviews = ({ reviews }) => (
    <div className="reviews__container">
        <h3 className="reviews--title">Other's Reviews:</h3>
        <hr />
        {reviews?.map((review) => (
            <div className="review--container" key={review._id}>
                <ReactStars
                    count={5}
                    value={review.rating}
                    isHalf
                    emptyIcon={<i className="far fa-star" />}
                    halfIcon={<i className="fa fa-star-half-alt" />}
                    fullIcon={<i className="fa fa-star" />}
                    activeColor="#febd69"
              />
                <p className="review-by">
                by{review.name}
              </p>
                <p className="review-comment">{review.comment}</p>
                <hr />
          </div>
        ))}
  </div>
);

export default ListReviews;
