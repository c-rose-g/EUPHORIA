import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { productDetails } from '../../store/products';
import { loadReviews, loadUserReviews } from '../../store/review';
import ProductImageSlider from '../ProductImageSlider';
import CategoriesNavBar from '../CategoriesNavBar';
import AddToBasketButton from '../AddToBasketButton';
import { Modal } from '../../context/Modal';
import SignUpModal from '../SignUpModal';
import Footer from '../Footer/Footer';
import './ProductDetails.css'

const ProductDetails = () => {
	const dispatch = useDispatch();
	const [showSignUpModal, setShowSignUpModal] = useState(false);
	const { productId } = useParams();
	const user = useSelector((state) => state.session.user);
	// console.log('user >>>>>>>.', user);

	const prodReviews = useSelector((state) =>
		Object.values(state.reviews.reviews)
	);
	// console.log('product reviews', prodReviews);

	// console.log('user review >>>>>>>>>.', userReview);
	const oneProd = useSelector((state) => state.products.oneProduct);
	const [loaded, isLoaded] = useState(false);
	// const productInfo = Object.values(oneProd);
	// console.log('this is one product', oneProd);
	// console.log('product info >>>>', productInfo);
	const prodImages = oneProd.product_photos;
	// console.log('prodImage >>>>>>', prodImages)
	// console.log('this is product reviews >>>>>', prodReviews)

	useEffect(() => {
		dispatch(productDetails(productId)).then(() => isLoaded(true));
		dispatch(loadReviews(productId));
	}, [dispatch]);
	
	let userReview;
	if(prodReviews){
		userReview = prodReviews.find((obj) => obj.user_id.id === user.id);
	} else{
		return null
	}
	// 'color' (color {oneProd.product_photos[0].prod_color_name})

	return (
		<>
			{loaded && (
				<>
					<CategoriesNavBar />
					<div className='product-details-page-container'>
						<div className='product-details-columns-container'>
							<div className='product-details-container'>
								<div className='product-details-img-container'>
									<ProductImageSlider />
								</div>
								<div className='product-details-info-container'>
									<div className='product-details font-16'>
										<div className='font-20' style={{ fontWeight: 'bold' }}>{oneProd.product_brand}</div>
										<div >{oneProd.product_name}</div>
										<div style={{ fontWeight: 'bold' }}>${oneProd.product_price}</div>
										<div>
											{oneProd.product_photos[0].prod_color_name ===
											'none' ? null : (
												<div className=''>{oneProd.product_photos[0].prod_color_name}
												</div>
											)}
										</div>

										<div>
											{user ? (
												<AddToBasketButton productId={productId} />
											) : (
												<div>
													<button onClick={() => setShowSignUpModal(true)}>
														Sign up to add to basket
													</button>
												</div>
											)}{' '}
										</div>
									</div>
								</div>
								<div>
									{showSignUpModal && (
										<Modal onClose={() => setShowSignUpModal(false)}>
											<SignUpModal setShowSignUpModal={setShowSignUpModal} />
										</Modal>
									)}
								</div>
							</div>
						</div>
						<div className='product-details-rows-containers'>
							<div className='font-20 product-details-row-header'>
								About the product
							</div>
							<div className='product-details-row-text-div font-14'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
								mollitia, molestiae quas vel sint commodi repudiandae
								consequuntur voluptatum laborum numquam blanditiis harum
								quisquam eius sed odit fugiat iusto fuga praesentium optio,
								eaque rerum! Provident similique accusantium nemo autem.
								Veritatis obcaecati tenetur iure eius earum ut molestias
								architecto voluptate aliquam nihil, eveniet aliquid culpa
								officia aut! Impedit sit sunt quaerat, odit, tenetur error,
								harum nesciunt ipsum debitis quas aliquid.
							</div>
							<div className='font-20 product-details-row-header'>
								Ingredients
							</div>

							<div className='product-details-row-text-div font-14'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
								mollitia, molestiae quas vel sint commodi repudiandae
								consequuntur voluptatum laborum numquam blanditiis harum
								quisquam eius sed odit fugiat iusto fuga praesentium optio,
								eaque rerum! Provident similique accusantium nemo autem.
								Veritatis obcaecati tenetur iure eius earum ut molestias
								architecto voluptate aliquam nihil, eveniet aliquid culpa
								officia aut! Impedit sit sunt quaerat, odit, tenetur error,
								harum nesciunt ipsum debitis quas aliquid.
							</div>
							<div className='font-20 product-details-row-header'>
								How to use
							</div>

							<div className='product-details-row-text-div font-14'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
								mollitia, molestiae quas vel sint commodi repudiandae
								consequuntur voluptatum laborum numquam blanditiis harum
								quisquam eius sed odit fugiat iusto fuga praesentium optio,
								eaque rerum! Provident similique accusantium nemo autem.
								Veritatis obcaecati tenetur iure eius earum ut molestias
								architecto voluptate aliquam nihil, eveniet aliquid culpa
								officia aut! Impedit sit sunt quaerat, odit, tenetur error,
								harum nesciunt ipsum debitis quas aliquid.
							</div>

							<div className='font-20 product-details-row-header'>
								Reviews
							</div>
							<div className='reviews-section'>
								<div className='product-details-upper-row font-18 product-details-row-text-div'>
									{!userReview ? (
										<NavLink
											className='remove-underline'
											to={`/reviews/${productId}/new`}
										>
											<button className='product-details-review-button font-16-white'>
												Write a review
											</button>
										</NavLink>
									) : (
										<div>
											<NavLink to={`/reviews/${userReview.id}`}>
												<button className='product-details-review-button font-16-white'>
													update your review
												</button>
											</NavLink>
										</div>
									)}
								</div>
								<div className='product-details-lower-columns'>
									{prodReviews.map((obj) => {
										return (
											<div className='reviews-div font-16'>
												<div
													className='product-details-column-mid'
													key={obj.id}
												>
													<div className='review-div'>
														<div>{obj.review_msg}</div>
													</div>
												</div>
												<div className='product-details-column-right'>
												<div className='review-name'>

													{obj.user_id.first_name}
												</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</>
			)}
		</>
	);
};

export default ProductDetails;
