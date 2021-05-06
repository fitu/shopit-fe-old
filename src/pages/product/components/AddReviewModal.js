import '../styles/addReviewModal.scss';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newReview } from '../../../store/actions/productAction';
import ReactStars from 'react-rating-stars-component';

const AddReviewModal = ({ match, showModal }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();

    const reviewHandler = () => {
        const formData = new FormData();

        formData.set('rating', rating);
        formData.set('comment', comment);
        formData.set('productId', match.params.id);

        dispatch(newReview(formData));
    };

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Submit Review</h5>
                <button type="button" className="close" onClick={() => showModal(false)}>
                    <span>&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="stars-container">
                    <ReactStars
                        count={5}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        onChange={(value) => {}}
                        activeColor="#febd69" // TODO remove hardcoded
                    />
                </div>
                <textarea
                    className="comment"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                ></textarea>
                <button className="submit" onClick={reviewHandler}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default AddReviewModal;
