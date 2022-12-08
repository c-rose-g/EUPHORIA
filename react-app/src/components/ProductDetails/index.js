import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { productDetails } from '../../store/products';
import { loadReviews, loadUserReviews } from '../../store/review';
import ProductImageSlider from '../ProductImageSlider';
import CategoriesNavBar from '../CategoriesNavBar';
import AddToBasketButton from '../AddToBasketButton';
import { loadUserCart } from '../../store/shoppingCarts';
import { Modal } from '../../context/Modal';
import SignUpModal from '../SignUpModal';
import LoginModal from '../LoginModal';
import Footer from '../Footer/Footer';
import './productDetails.css';

const ProductDetails = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [showSignUpModal, setShowSignUpModal] = useState(false);
	const [showLoginModal, setShowLoginModal] = useState(false);
	const { productId } = useParams();

	const user = useSelector((state) => state.session.user);

	const userBasket = useSelector((state) =>
		Object.values(state.basket.userBasket)
	);


	// const findProdInBasket = userBasket.find(obj => obj.prod_id === +productId)
	let findProdInBasket;
	if (userBasket) {
		let itemCheck = userBasket.find((obj) => obj.prod_id === +productId);
		// let itemCheckTwo = Object.values(userBasket[0]).find(
		// 	(obj) => obj.prod_id === +productId
		// );
		let itemCheckTwo;
		let prodArray;
		if (userBasket[0] && userBasket[0][1]) {
			prodArray = Object.values(userBasket[0]);
			console.log('HERE IS PROD ARRAY', prodArray);
			itemCheckTwo = prodArray.find((obj) => obj.prod_id === +productId);
		}
		if (itemCheck) {
			findProdInBasket = itemCheck;
		} else if (itemCheckTwo) {
			findProdInBasket = itemCheckTwo;
		}
	}

	const prodReviews = useSelector((state) =>
		Object.values(state.reviews.reviews)
	);

	const oneProd = useSelector((state) => state.products.oneProduct);
	const [loaded, isLoaded] = useState(false);

	const prodImages = oneProd.product_photos;


	useEffect(() => {
		dispatch(productDetails(productId)).then(() => isLoaded(true));
		dispatch(loadReviews(productId));
		if (user) {
			dispatch(loadUserCart(user.id));
		}
	}, [dispatch]);

	let userReview;
	if (prodReviews && user) {
		userReview = prodReviews.find((obj) => obj.user_id.id === user.id);
	}

	const openSignUpToCreateReview = () => {
		if (user) {
			history.push(`/reviews/${productId}/new`);
		} else {
			setShowLoginModal(true);
		}
	};

	const openSignUptoUpdateReview = () => {
		if (user) {
			history.push(`/reviews/${userReview.id}`);
		} else {
			setShowLoginModal(true);
		}
	};
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
										<div className='font-20' style={{ fontWeight: 'bold' }}>
											{oneProd.product_brand}
										</div>
										<div>{oneProd.product_name}</div>
										<div style={{ fontWeight: 'bold' }}>
											${oneProd.product_price}
										</div>
										<div>
											{oneProd.product_photos[0].prod_color_name ===
											'none' ? null : (
												<div className=''>
													{oneProd.product_photos[0].prod_color_name}
												</div>
											)}
										</div>

										<div>
											{user &&
												!findProdInBasket &&(
													<AddToBasketButton productId={productId} />
												)}
											{user &&
												findProdInBasket &&(
													<div className='add-button-pressed font-20'>
														{' '}
														Item is in your basket
													</div>
												)}
											{!user && (
												<div>
													<button
														className='pd-signup font-16-white'
														onClick={() => setShowLoginModal(true)}
													>
														Sign up to add to basket
													</button>
												</div>
											)}
										</div>
									</div>
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

							<div className='font-20 product-details-row-header'>Reviews</div>
							<div className='reviews-section'>
								<div className='product-details-upper-row font-18 product-details-row-text-div'>
									{!userReview ? (
										<div className='remove-underline'>
											<button
												className='product-details-review-button font-16-white'
												onClick={openSignUpToCreateReview}
											>
												Write a review
											</button>
										</div>
									) : (
										<div>
											<div>
												<button
													className='product-details-review-button font-16-white'
													onClick={openSignUptoUpdateReview}
												>
													update your review
												</button>
											</div>
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
							<div>
								{showLoginModal && (
									<Modal onClose={() => setShowLoginModal(false)}>
										<LoginModal setShowLoginModal={setShowLoginModal} />
									</Modal>
								)}
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
