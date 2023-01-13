import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton/ProfileButton';
import { Modal } from '../../context/Modal';
import LoginModal from '../LoginModal';
import LovesPage from '../LovesPage';
import { TiGroupOutline, TiGroup } from 'react-icons/ti';
import './NavBar.css';

const NavBar = () => {
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [commIcon, setCommIcon] = useState(false);
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
					<div
						className='nav-community-container '
						onMouseEnter={() => setCommIcon(true)}
						onMouseLeave={() => setCommIcon(false)}
					>
								{commIcon ? <TiGroup /> : <TiGroupOutline />}
						<NavLink
							to={{pathname:'https://community.sephora.com/'}}
							target='_blank'
							className='font-14'
							style={{textDecoration:'none'}}
						>
							{/* <span className='community-icons-container'> */}
							{/* <button className='community-icons-text-container'> */}
							{/* </span> */}
							<div className='community-text font-14'>
								Community
							{/* </button> */}
							</div>
						</NavLink>
					</div>
					<div className='acct-buttons'>
						{sessionLinks}
						{/* <div>
							{sessionUser ? (
								<NavLink to={`/loves/${sessionUser.id}`}>
									<i
										className='fa-solid fa-heart'
										style={{ color: 'black', fontSize: '30px' }}
									></i>
								</NavLink>
							) : (
								<button
									// className= 'fa-solid fa-heart'
									onClick={() => setShowLoginModal(true)}
									style={{ backgroundColor: 'white', width: '30%' }}
								>
									<i
										className='fa-solid fa-heart'
										style={{
											color: 'black',
											fontSize: '30px',
											backgroundColor: 'white',
										}}
									></i>
								</button>
							)}
						</div> */}
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
