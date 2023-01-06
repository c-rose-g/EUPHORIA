import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton/ProfileButton';
import { Modal } from '../../context/Modal';
import LoginModal from '../LoginModal';
import LovesPage from '../LovesPage';
import './NavBar.css';
const NavBar = () => {
	const [showLoginModal, setShowLoginModal] = useState(false);
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	} else {
		sessionLinks = (
			<>
				<ProfileButton />
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
						<strong>Don't postpone the holiday cheer.</strong>{' '}
						<strong>SHOP NOW▸ </strong>
					</NavLink>
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
							{sessionUser && (
								<NavLink to={`/loves/${sessionUser.id}`}>
									<i
										className="fa-solid fa-heart"
										style={{color:'black', fontSize: '30px' }}
									></i>
								</NavLink>
							)}
						</div>
						<div>
							{sessionUser ? (
								<NavLink to={`/basket/${sessionUser.id}`}>
									<button className='emoji-button'>
										<i
											className='fa-solid fa-basket-shopping'
											style={{
												fontSize: '30px',
												backgroundColor: 'white',
												color: 'black',
											}}
										></i>
									</button>
								</NavLink>
							) : (
								<button
									className='emoji-button'
									onClick={() => setShowLoginModal(true)}
								>
									<i className='fa-solid fa-basket-shopping'></i>
								</button>
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
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
