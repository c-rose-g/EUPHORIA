import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import AddToBasketButton from '../AddToBasketButton';
import { Modal } from '../../context/Modal';
import SignUpModal from '../SignUpModal';
import LoginModal from '../LoginModal';
import LoveButton from '../LovesButton';
import './index.css';

const LovesDropDown = () => {
	const dispatch = useDispatch();
	const [dropdown, setDropdown] = useState(false);
	const [showSignUpModal, setShowSignUpModal] = useState(false);
	const [showLoginModal, setShowLoginModal] = useState(false);

	const userLoves = useSelector(state => Object.values(state.loves.loves));
	console.log('user loves >>>>', userLoves)
	const signedInUser = useSelector((state) => state.session.user);
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
		<div
			className='loves-dropdown-container'
			onMouseOver={() => setDropdown(true)}
			onMouseLeave={() => setDropdown(false)}
		>
			<button className='loves-dropdown-button'>
				{dropdown ? <BsSuitHeartFill /> : <BsSuitHeart />}
			</button>

			{dropdown && (
				<div
					className='loves-dropdown-page'
					style={{ transition: 'all .8s linear 0s' }}
				>
					{signedInUser ? (
						<>
							<div className='loves-dropdown-title font-20'>
							Recently Loved <NavLink to={`/loves/${signedInUser.id}`}>View all</NavLink>
							</div>
							{userLoves.length ? (<div className='loves-dropdown-list-container'>
								{userLoves.map(love => (
									<>
										<div className='love-row-container'>
											<div className='love-left-container'>
											<img className='love-img' src={love.prod_id.product_photos[0].prod_photo} />
											</div>
											<div className='love-middle-container font-12'>
												<div style={{fontWeight:'bold'}}>{love.prod_id.product_brand}</div>
												<div>{love.prod_id.product_name}</div>
												<div style={{fontWeight:'bold'}}>{love.prod_id.product_price}</div>
											</div>
											<div className='love-right-container'>
											{/* <AddToBasketButton style={{width:'10px'}}/> */}
											<NavLink to={`/products/${love.prod_id.id}`} className='remove-underline font-18' style={{fontWeight:'bold'}}>View</NavLink>
											{/* <LoveButton/> */}
											</div>

										</div>
									</>
								))}
							</div>)
							: (
								<>
									<div className='loves-dropdown-subtext font-14'>Use your Loves list to keep track of your favorite products.</div>
									<div>
									<NavLink to={'/'} className='loves-dropdown-shop-now font-20-white' > Shop Now</NavLink>
									</div>
								</>)}


						</>
					) : (
						<>

							<div className='loves-dropdown-title font-20 '> Recently Loved</div>
							<div className='loves-dropdown-subtext font-14'>
								Use your Loves list to keep track of your favorite products.
							</div>
							<div className='not-signed-button-container'><button
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
							</button></div>
						</>
					)}
				</div>
			)}
			{/* <div>
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
			</div> */}
		</div>
	);
};

export default LovesDropDown;
