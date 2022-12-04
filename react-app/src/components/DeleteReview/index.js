import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteReview } from '../../store/review';
import '../CreateReviewForm/CreateReview.css'
const DeleteReviewButton = () => {
	const { reviewId } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();
	const currentProd = useSelector((state) => state.products.oneProduct);

	const handleDelete = async () => {
		await dispatch(deleteReview(reviewId));
		history.push(`/products/${currentProd.id}`);
	};
	return (
		<>
			<button className='update-delete-button font-16-white' onClick={handleDelete}>delete your review</button>
		</>
	);
};
export default DeleteReviewButton;
