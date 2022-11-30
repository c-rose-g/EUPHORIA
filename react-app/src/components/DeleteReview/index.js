import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteReview } from '../../store/review';
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
		<div>
			<button onClick={handleDelete}>delete your review</button>
		</div>
	);
};
export default DeleteReviewButton;
