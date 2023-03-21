import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { allProducts } from '../../store/products';
import { loadUserCart } from '../../store/shoppingCarts';
import { RiShoppingBasketLine, RiShoppingBasketFill } from 'react-icons/ri';
import { Modal } from '../../context/Modal';
import SignUpModal from '../SignUpModal';
import LoginModal from '../LoginModal';
import './index.css';

const CheckoutDropDown = () => {
	const dispatch = useDispatch();
	const [dropdown, setDropdown] = useState(false);
	const [showSignUpModal, setShowSignUpModal] = useState(false);
	const [showLoginModal, setShowLoginModal] = useState(false);

	const user = useSelector((state) => state.session.user);
	const products = useSelector((state) => state.products.allProducts);
	const userBasket = useSelector((state) => state.basket.userBasket);
	const basketItems = userBasket.cart_prod
		? Object.values(userBasket.cart_prod)
		: [];
	let basketTotal = 0;

	useEffect(() => {
		if (user) {
			async function fetchUserCart() {
				await dispatch(allProducts());
				await dispatch(loadUserCart(user.id));
			}
			fetchUserCart();
		}
	}, [dispatch, user]);
	// helper functions
	const closeForSignUp = () => {
		setDropdown(false);
		setShowSignUpModal(true);
	};

	const closeForLogin = () => {
		setDropdown(false);
		setShowLoginModal(true);
	};

	return (
    <>

		<div
			className='checkout-dropdown-container'
			onMouseEnter={() => setDropdown(true)}
			onMouseLeave={() => setDropdown(false)}
		>
			<div className='checkout-basket-button-container'>
				<div className='checkout-basket-img'>
					{dropdown ? <RiShoppingBasketFill /> : <RiShoppingBasketLine />}
				</div>
			</div>
			<div className='checkout-dropdown'>
				{dropdown ? (
					<div
						// className='checkout-dropdown-page'
						style={{ transition: 'all .1s linear 0s' }}
					>
						{user ? (
							<div className='checkout-dropdown-page'>
								<div className='checkout-title'>
									<div className='font-20'>Basket</div>
									<div>
										<NavLink
											to={`/basket/${user.id}`}
											className='remove-underline font-20'
										>
											View All
										</NavLink>
									</div>
								</div>
								{/* <div className='checkout-content'> */}
								{basketItems.length ? (
									<div className='basketItems-container'>
										<div className='checkout-content'>
											{basketItems.map((item) => (
												<>
													<div
														className='basket-items'
														key={item.id}
														value={item.id}
													>
														<div className='item-rows-container'>
															<div className='item-left-container'>
																<img
																	className='item-img'
																	src={
																		products[item.prod_id].product_photos[0]
																			.prod_photo
																	}
																/>
															</div>
															<div className='item-middle-container font-12'>
																<div style={{ fontWeight: 'bold' }}>
																	{products[item.prod_id].product_brand}
																</div>
																<div>{products[item.prod_id].product_name}</div>
																<div style={{ color: 'rgb(19, 107, 234)' }}>
																	move to love
																</div>
															</div>
															<div className='item-right-container font-12'>
																<div style={{ fontWeight: 'bold' }}>
																	${products[item.prod_id].product_price}
																</div>
																<div className='remove-button'>remove</div>
															</div>
														</div>
													</div>
												</>
											))}
										</div>
										<div className='basket-items-total-container'>
											<div className='total-top-row'>
												<div className='total-top-left-container font-12'>
													<strong>Subtotal</strong> ({basketItems.length} items)
												</div>
												<div
													className='total-top-right-container font-12'
													style={{ fontWeight: 'bold' }}
												>
													{basketItems.forEach(
														(item) =>
															(basketTotal +=
																item.prod_quantity *
																products[item.prod_id].product_price)
													)}
													<div className='basket-total font-12'>
														${basketTotal}
													</div>
												</div>
											</div>
											{/* <div className='total-bottom-row'>
															View basket & Checkout
														</div> */}
										</div>
									</div>
								) : (
									<div></div>
								)}
								{/* </div> */}
								<div className='checkout-button-container'></div>
							</div>
						) : (
							<div className='not-signedin-basket'>
								<div className='checkout-title'>
									<div className='font-20'>Basket</div>

								</div>
								<div className='nocheckout-content'>
                <div className='font-14' style={{margin:'10%', overflowWrap:'break-word', whiteSpace:'pre-wrap',fontWeight:'bold', overflow:'none'}}>
                  Sign in to see items you may have added previously.
										</div>
                </div>
								<div className='checkout-button-container'>
                <div className='not-signed-button-container'>
									<button
										className='profile-signin font-16-white'
										onClick={closeForLogin}
									>
										Sign in
									</button>
									<button
										className='profile-login font-16'
										onClick={closeForSignUp}
									>
										Create Account
									</button>
								</div>
                </div>
							</div>
						)}
					</div>
				) : (
					<div
						className='checkout-not-signedin-user'
						style={{
							visibility: 'hidden',
							opacity: '0',
							transform: 'translateY(8px)',
							transition: 'all 0.1s ease 0s;',
						}}
					></div>
				)}
			</div>
    <div>
				{showSignUpModal && (
					<Modal onClose={() => setShowSignUpModal(false)}>
						<SignUpModal setShowSignUpModal={setShowSignUpModal} />
					</Modal>
				)}
			</div>
			<div>
				{showLoginModal && (
					<Modal onClose={() => setShowLoginModal(false)}>
						<LoginModal setShowLoginModal={setShowLoginModal} />
					</Modal>
				)}
			</div>
		</div>
    </>

	);
};
export default CheckoutDropDown;
