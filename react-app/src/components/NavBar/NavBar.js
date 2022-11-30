import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import LogoutButton from '../auth/LogoutButton';
// import SignUpModal from '../SignUpModal';
import ProfileButton from '../ProfileButton/ProfileButton';
import deals_banner from '../../Images/euphoria-splash-deals-banner.png';
// import user from '../../Images/euphora-sign-in.png';
import './NavBar.css';
import { useSelector } from 'react-redux';
const NavBar = () => {
	// const [openMenu, setOpenMenu] = useState(false);
	// const [loaded, isLoaded] = useState(true)
	const sessionUser = useSelector(state => state.session)
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
						className='nav-deals-text font-11'
						to='/'
						activeClassName='active'
					>
						<strong>Free Shipping on all orders above $100</strong> Today Only!{' '}
						<strong>SHOP NOW▸ </strong>
					</NavLink>
					<img
						style={{ width: '418px', height: '41px' }}
						id='deals-img'
						src={deals_banner}
						alt='deals banner'
					/>
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
							<NavLink
								className='emoji-button'
								to=''
								exact={true}
								activeClassName='active'
							>
								<i className='fa-solid fa-basket-shopping'></i>
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
