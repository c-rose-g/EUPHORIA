import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory, useParams } from 'react-router-dom';
import { updateReview } from '../../store/review';
import { loadOneReview } from '../../store/review';
import CategoriesNavBar from '../CategoriesNavBar';
import DeleteReviewButton from '../DeleteReview';
import '../CreateReviewForm/CreateReview.css';

const UpdateReviewForm = () => {
	const dispatch = useDispatch();
	let { reviewId } = useParams();
	reviewId = +reviewId;
	// console.log('review id 18', reviewId);
	const history = useHistory();
	const [loaded, setLoaded] = useState(false);
	const [renderErr, setRenderErr] = useState(false);
	const [reviewErr, setReviewErr] = useState('')
	// const userReviews = useSelector(state => state.reviews.userReviews)
	const currentProd = useSelector((state) => state.products.oneProduct);
	const prodReview = useSelector((state) =>
		Object.values(state.reviews.reviews)
	);
	const user = useSelector((state) => state.session.user);
	// console.log('find user >>>>>>>>', findUser)
	const findUser = prodReview.find((id) => id.user_id.id === user.id);

	const [review_msg, setReview_msg] = useState(findUser.review_msg);
	const [updatedMsg, setUpdatedMsg] = useState('')
	// console.log('find user >>>>', findUser);
	// console.log('prod reviews >>>', prodReview);
	// console.log('user reviews', userReviews )
	// console.log('user >>>>', user);
	// console.log('current product >>>>>>>', currentProd);


	useEffect(() => {
		// console.log('review id in dispatch', reviewId)
		dispatch(loadOneReview(reviewId)).then(() => setLoaded(true));
	}, [dispatch]);
	// helper functions
	const updateReviewMsg = (e) => {
		if(review_msg.length !== updateReviewMsg.length){
			setUpdatedMsg(e.target.value);
		}
	};

	let product_image;
	if (currentProd.product_photos) {
		product_image = currentProd.product_photos[0].prod_photo;
	}

	const handleUpdateReview = async (e) => {
		e.preventDefault();

		const payload = {
			review_msg:updatedMsg,
			reviewId,
		};
		const data = await dispatch(updateReview(payload));
		history.push(`/products/${currentProd.id}`);

		if(updatedMsg){
			setReviewErr(updatedMsg)
		}
	};

	useEffect(() =>{
		if(!review_msg.trim().length){
			setReviewErr('review cannot be empty.')
		}
		else if(review_msg.trim().length > 255){
			setReviewErr('Review must be less than 255 characters')
		} else{
			setReviewErr('')
		}
	},[review_msg])

	if(!user){
		return(
			<Redirect to='/'/>
		)
	}
	return (
		<>
			{loaded && (
				<>
					<CategoriesNavBar />
					<div className='review-page-container'>
						<div className='review-page-header font-24'>Update Your Review</div>
						<div className='review-columns-container'>
							<div className='review-product-image-container'>
								<img src={product_image} />
							</div>
							<div className='review-details-container'>
								<div className='review-product-details'>
									<div className='font-16' style={{ fontWeight: 'bold' }}>
										{currentProd.product_brand}{' '}
									</div>
									<div className='font-16'>{currentProd.product_name} </div>
									<form
										className='review-form-container'
										onSubmit={handleUpdateReview}
									>
										{reviewErr ?(<label
											className='review-header font-16'
											style={{ fontWeight: 'bold' }}
										>
											Review: {renderErr}
										</label>):(<label
											className='review-header font-16'
											style={{ fontWeight: 'bold' }}
										>
											Review
										</label>)}
										<input
											className='review-input font-14'
											type='text'
											value={review_msg}
											onChange={updateReviewMsg}
										/>
										<div className='update-submit-button-container'>
											<button
												className='update-submit-button font-16-white'
												type='submit'
												onSubmit={handleUpdateReview}
											>
												update your review
											</button>
											<DeleteReviewButton />
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default UpdateReviewForm;
