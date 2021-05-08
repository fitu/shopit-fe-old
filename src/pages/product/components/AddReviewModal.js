import '../styles/addReviewModal.scss';

import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useDispatch } from 'react-redux';

import { newReview } from '../../../store/actions/productAction';

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
                        isHalf
                        emptyIcon={<i className="far fa-star" />}
                        halfIcon={<i className="fa fa-star-half-alt" />}
                        fullIcon={<i className="fa fa-star" />}
                        onChange={(value) => {}}
                        activeColor="#febd69"
                  />
              </div>
                <textarea
                    className="comment"
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
              />
                <button className="submit" onClick={reviewHandler}>
                Submit
                </button>
          </div>
      </div>
    );
};

export default AddReviewModal;
