import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { productDetails } from '../../store/products';
import { loadReviews, loadUserReviews } from '../../store/review';
import ProductImageSlider from '../ProductImageSlider';
import CategoriesNavBar from '../CategoriesNavBar';
import './productDetails.css';

const ProductDetails = () => {
	const dispatch = useDispatch();
	const { productId } = useParams();
	const user = useSelector(state => state.session.user)
	console.log('this is user >>>>.', user)
	const prodReviews = useSelector((state) =>
		Object.values(state.reviews.reviews)
	);
	console.log('product reviews', prodReviews)
	const userReviews = useSelector((state) =>
		Object.values(state.reviews.userReviews)
	);
	// console.log('user reviews', userReviews);
	const oneProd = useSelector((state) => state.products.oneProduct);
	const [loaded, isLoaded] = useState(false);
	// const productInfo = Object.values(oneProd);
	// console.log('this is one product', oneProd);
	// console.log('product info >>>>', productInfo);
	const prodImages = oneProd.product_photos;
	// console.log('prodImage >>>>>>', prodImages)
	// console.log('this is product reviews >>>>>', prodReviews)

	useEffect(() => {
		dispatch(productDetails(1)).then(() => isLoaded(true));
		dispatch(loadUserReviews(1));
		dispatch(loadReviews(1));
	}, [dispatch]);

	return (
		<>
			{loaded && (
				<>
					<div className='product-details-page-container'>
						<CategoriesNavBar />
						<div className='product-details-container'>
							<div className='product-details-img'>
								<ProductImageSlider />
							</div>
							<div className='product-details-info-container'>
								<div className='product-details'></div>
								<div> {oneProd.product_brand} </div>
								<div>{oneProd.product_name}</div>
								<div>{oneProd.product_price}</div>
								<div>
									{oneProd.product_photos[0].prod_color_name === 'none'
										? null
										: 'heloo'}
								</div>
							</div>
						</div>
					</div>
					<div className='product-details-rows-containers'>
						<div className='font-20'> about the product (fetch from api)</div>
						<div className='product-details-row-divider'>
							{' '}
							about the product (fetch from api)
						</div>
						<div className='font-20'> Ingredients(fetch from api)</div>

						<div className='product-details-row-divider'>
							{' '}
							Ingredients(fetch from api)
						</div>
						<div className='font-20'> How to use(fetch from api)</div>

						<div className='product-details-row-divider'>
							{' '}
							How to use(fetch from api){' '}
						</div>
						<div className='font-20'>Ratings and Reviews</div>

						<div className='product-details-row-divider'>
							<div className='product-details-upper-row'>
								{' '}
								ratings number, and ratings bars
								<NavLink to={`/reviews/${productId}/new`}>
									Write a review
								</NavLink>
							</div>
							<div className='product-details-lower-columns'>
								<div className='product-details-column-left'>
									review_rating{' '}
								</div>
								<div className='product-details-column-mid'>
									{prodReviews.map((obj) => {
										return (<div key={obj.id}>

										<div>
										{obj.review_msg}
										</div>
										<div>
											{user && user.id === obj.user_id.id ? (
												<button> update your review</button>
											) : null }
										</div>
										</div>);
									})}
								</div>
								<div className='product-details-column-right'>
									{userReviews.map((obj) => {
										<div key={obj.id}>{obj.first_name}</div>;
									})}
								</div>
								{/* <div> */}

								{/* {prodReviews.map((review) =>
                  return(
                   <div key={review.id}> {review_}</div>
                ))} */}
								{/* </div> */}
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default ProductDetails;
