import './styles/listReviews.scss';
import React from 'react';
import ReactStars from 'react-rating-stars-component';

const ListReviews = ({ reviews }) => {
    return (
        <div className="reviews__container">
            <h3 className="reviews--title">Other's Reviews:</h3>
            <hr />
            {reviews?.map((review) => (
                <div className="review--container" key={review._id}>
                    <ReactStars
                        count={5}
                        value={review.rating}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#febd69" // TODO remove hardcoded
                    />
                    <p className="review-by">by {review.name}</p>
                    <p className="review-comment">{review.comment}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default ListReviews;
