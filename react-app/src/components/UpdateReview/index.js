import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink, useHistory, useParams } from 'react-router-dom';
import { updateReview } from '../../store/review';
import { loadOneReview } from '../../store/review';
import CategoriesNavBar from '../CategoriesNavBar';
import DeleteReviewButton from '../DeleteReview';
const UpdateReviewForm = () => {
	const dispatch = useDispatch();
	let { reviewId } = useParams();
	reviewId = +reviewId;
	// console.log('review id 18', reviewId);
	const history = useHistory();
	const [loadedProductId, setLoadedProductId] = useState(false);
	const [review_msg, setReview_msg] = useState('');

	// const userReviews = useSelector(state => state.reviews.userReviews)
	const currentProd = useSelector((state) => state.products.oneProduct);
	const prodReview = useSelector((state) =>
		Object.values(state.reviews.reviews)
	);
	const user = useSelector((state) => state.session.user);
	// console.log('find user >>>>>>>>', findUser)
	const findUser = prodReview.find((id) => id.user_id.id === user.id);
	// console.log('find user >>>>', findUser);
	// console.log('prod reviews >>>', prodReview);
	// console.log('user reviews', userReviews )
	// console.log('user >>>>', user);
	// console.log('current product >>>>>>>', currentProd);

	useEffect(() => {
		// console.log('review id in dispatch', reviewId)
		dispatch(loadOneReview(reviewId));
		// .then(() => setLoadedProductId(true))
	}, [dispatch]);
	// helper functions
	const updateReviewMsg = (e) => {
		setReview_msg(e.target.value);
	};

	let product_image;
	if (currentProd.product_photos) {
		product_image = currentProd.product_photos[0].prod_photo;
	}
	// useEffect(()=>{
	//   if(prodReview){
	//     setLoadedProductId(true)
	//   }
	// })
	const handleUpdateReview = async (e) => {
		e.preventDefault();

		const payload = {
			review_msg,
			reviewId,
		};
		const data = await dispatch(updateReview(payload));
		history.push(`/products/${currentProd.id}`);
	};
	return (
		<>
			{
				<div className='update-review-page-container'>
					<div>
						<CategoriesNavBar />
					</div>
					<div className='review-rows-container'>
						<div className='review-product-image-container'>
							<img src={product_image} />
						</div>
						<div className='review-columns-container'>
							<div className='review-product-info'> product info</div>
							<form onSubmit={handleUpdateReview}>
								<label>Update your review</label>
								<input
									type='text'
									value={review_msg}
									onChange={updateReviewMsg}
									placeholder={findUser.review_msg}
								/>
								<button type='submit'>update your review</button>
                <DeleteReviewButton/>
							</form>
						</div>
					</div>
				</div>
			}
		</>
	);
};

export default UpdateReviewForm;
