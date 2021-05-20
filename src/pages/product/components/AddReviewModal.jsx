import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { useDispatch } from 'react-redux';

import { newReview } from '../../../store/actions/productAction';
import '../styles/addReviewModal.scss';

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
        <div className={'modal-content'}>
            <div className={'modal-header'}>
                <h5 className={'modal-title'}>{'Submit Review'}</h5>
                <button className={'close'} type={'button'} onClick={() => showModal(false)}>
                    <span>&times;</span>
                </button>
            </div>
            <div className={'modal-body'}>
                <div className={'stars-container'}>
                    <ReactStars
                        isHalf
                        activeColor={'#febd69'}
                        count={5}
                        emptyIcon={<i className={'far fa-star'} />}
                        fullIcon={<i className={'fa fa-star'} />}
                        halfIcon={<i className={'fa fa-star-half-alt'} />}
                        onChange={(value) => {}}
                    />
                </div>
                <textarea className={'comment'} value={comment} onChange={(event) => setComment(event.target.value)} />
                <button type='button' className={'submit'} onClick={reviewHandler}>
                    {'Submit'}
                </button>
            </div>
        </div>
    );
};

AddReviewModal.displayName = 'AddReviewModal';

export default AddReviewModal;
