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
	const history = useHistory();
	const [loaded, setLoaded] = useState(false);
	const [renderErr, setRenderErr] = useState(false);
	const [reviewErr, setReviewErr] = useState('')
	const currentProd = useSelector((state) => state.products.oneProduct);
	const prodReview = useSelector((state) =>
		Object.values(state.reviews.reviews)
	);
	const user = useSelector((state) => state.session.user);
	const findUser = prodReview.find((id) => id.user_id.id === user.id);

	const [review_msg, setReview_msg] = useState('');

	const [updatedMsg, setUpdatedMsg] = useState('')

	useEffect(()=>{
		if(findUser){
			setReview_msg(findUser.review_msg)
		}
	},[findUser,currentProd, user])

	useEffect(() => {
		dispatch(loadOneReview(reviewId)).then(() => setLoaded(true));
	}, [dispatch]);

	// helper functions
	const updateReviewMsg = (e) => {

		setReview_msg(e.target.value)
	};

	let product_image;
	if (currentProd.product_photos) {
		product_image = currentProd.product_photos[0].prod_photo;
	}

	const handleUpdateReview = async (e) => {
		e.preventDefault();
		if(!reviewErr){

			const payload = {
				review_msg:review_msg,
				reviewId,
			};
			const data = await dispatch(updateReview(payload));
			history.push(`/products/${currentProd.id}`);
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
								<img style={{width:'80%', height:'80%'}} src={product_image} />
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
											Review: {reviewErr}
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
