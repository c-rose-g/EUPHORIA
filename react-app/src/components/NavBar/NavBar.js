import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from '../ProfileButton/ProfileButton';
import { Modal } from '../../context/Modal';
import LoginModal from '../LoginModal';
import deals_banner from '../../Images/euphoria-splash-deals-banner.png';
import './NavBar.css';
import { useSelector } from 'react-redux';
const NavBar = () => {
	const [showLoginModal, setShowLoginModal] = useState(false);
	// const [loaded, isLoaded] = useState(true)
	const sessionUser = useSelector(state => state.session.user)
	// console.log('session user', sessionUser)
	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	} else {
		sessionLinks = (
			<>
			<ProfileButton/>
			</>
		);
	}
	return (
		<div className='navBar-container'>
			<nav>
				<div className='nav-deals'>
					<NavLink
						className='nav-deals-text font-14-white'
						to='/products/categories/skincare'
						activeClassName='active'
					>
						<strong>Don't postpone the holiday cheer.</strong> {' '}
						<strong>SHOP NOW▸ </strong>
					</NavLink>
					{/* <img
						style={{ width: '418px', height: '41px' }}
						id='deals-img'
						src={deals_banner}
						alt='deals banner'
					/> */}
				</div>
				<div className='nav-box'>
					<div>
						<NavLink
							className='nav-logo font-20'
							to='/'
							exact={true}
							activeClassName='active'
						>
							EUPHORIA
						</NavLink>
					</div>
					<div className='nav-search'></div>
					<div className='acct-buttons'>
						{sessionLinks}
						<div>
							{sessionUser ? (<NavLink className='emoji-button' to={`/basket/${sessionUser.id}`}>
							<button>
							<i className='fa-solid fa-basket-shopping'></i>
							</button>
							</NavLink>)
							:(<button className='emoji-button' onClick={() => setShowLoginModal(true)}><i className='fa-solid fa-basket-shopping'></i></button>)
							}
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
			</nav>
		</div>
	);
};

export default NavBar;
