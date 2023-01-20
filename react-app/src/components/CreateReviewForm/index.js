import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createReview } from '../../store/review';
import CategoriesNavBar from '../CategoriesNavBar';
import { productDetails } from '../../store/products';
import './CreateReview.css';

const CreateReviewForm = () => {
	const { product_id } = useParams();

	const dispatch = useDispatch();
	const history = useHistory();
	const [review_msg, setReview_msg] = useState('');
	const [reviewErr, setReviewErr] = useState('')
	const [loaded, setLoaded] = useState(false);
	const prodInfo = useSelector((state) => state.products.oneProduct);


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
		if(!reviewErr){
			const payload = {
				product_id,
				review_msg:review_msg,
			};

			const data = await dispatch(createReview(payload));
			history.push(`/products/${product_id}`);
		}
	};

	useEffect(() =>{
		if(!review_msg.trim().length){
			setReviewErr('Review cannot be empty.')
		}
		else if(review_msg.trim().length > 255){
			setReviewErr('Review must be less than 255 characters')
		} else{
			setReviewErr('')
		}
	},[review_msg])
	return (
		<>
			{loaded && (
				<>
					<CategoriesNavBar />
					<div className='review-page-container'>
					<div className='review-page-header font-24'> Create a Review</div>
						<div className='review-columns-container'>
							<div className='review-product-image-container'>
								<img style={{width:'80%', height:'80%'}} src={product_image}></img>
							</div>
							<div className='review-details-container'>
								<div className='review-product-details'>
									<div className='font-16' style={{fontWeight:'bold'}}>{prodInfo.product_brand}</div>
									<div className='font-16'>{prodInfo.product_name}</div>

									<form className='review-form-container' onSubmit={newReview}>

										{reviewErr ?(<label
											className='review-header font-16'
											style={{ fontWeight: 'bold' }}
										>
											{reviewErr}
										</label>):(<label
											className='review-header font-16'
											style={{ fontWeight: 'bold' }}
										>
											Review
										</label>)}
										<textarea
											className='review-input font-14'
											type='text'
											value={review_msg}
											onChange={updateReviewMsg}
											placeholder='Please write your review here'
										>Write your review</textarea>
										<div className='review-submit-button-container'>

										<button className='review-submit-button font-16-white' onClick={newReview}>
											Submit Review
										</button>
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
export default CreateReviewForm;
