import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createReview } from '../../store/review';
import CategoriesNavBar from '../CategoriesNavBar';
import { productDetails } from '../../store/products';
const CreateReviewForm = () => {
	const { product_id } = useParams();
	console.log('prodId', product_id);
	const dispatch = useDispatch();
	const history = useHistory();
	const [review_msg, setReview_msg] = useState('');
	const [loaded, setLoaded] = useState(false);
	const prodInfo = useSelector((state) => state.products.oneProduct);
	console.log('this is product info >>.', prodInfo);

	useEffect(() => {
		dispatch(productDetails(product_id)).then(() => setLoaded(true));
	}, [dispatch]);

	// helper functions

	let product_image;

	if (prodInfo.product_photos) {
		product_image = prodInfo.product_photos[0].prod_photo;
	}
	const updateReviewMsg = (e) => {
		setReview_msg(e.target.value);
	};

	const newReview = async (e) => {
		e.preventDefault();
		const payload = {
			product_id,
			review_msg,
		};

		const data = await dispatch(createReview(payload));
		history.push(`/products/${product_id}`);
	};
	return (
		<>
			{loaded && (
				<div className='new-review-page-container'>
					<div>
						<CategoriesNavBar />
					</div>
					<div className='new-review-rows-container'>
						<div className='new-review-product-image-container'>
							<img src={product_image}></img>
						</div>
						<div className='new-review-columns-container'>
							<div className='new-review-product-info'>product info</div>
							<form onSubmit={newReview}>
								<label>Review</label>
								<input
									type='text'
									value={review_msg}
									onChange={updateReviewMsg}
									placeholder='Please write your review here'
								/>
								<button type='submit'>Submit Review</button>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
export default CreateReviewForm;
