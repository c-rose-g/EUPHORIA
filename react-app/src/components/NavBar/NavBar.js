import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton/ProfileButton';
import { Modal } from '../../context/Modal';
import LoginModal from '../LoginModal';
import LovesPage from '../LovesPage';
import LovesDropDown from '../LovesDropDown';
import SearchBar from '../SearchBar';
import { TiGroupOutline, TiGroup } from 'react-icons/ti';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import './NavBar.css';

const NavBar = () => {
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [commIcon, setCommIcon] = useState(false);
	const [heartIcon, setHeartIcon] = useState(false);
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	// NOTE is the bottom part correct?
	if (sessionUser) {
		sessionLinks = (
			<>
				<ProfileButton user={sessionUser} />
				<LovesDropDown user={sessionUser} />
			</>
		);
	} else {
		sessionLinks = (
			<>
				<ProfileButton />
				<LovesDropDown />
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
					<div className='nav-search'>
						<SearchBar/>
					</div>
					<div
						className='nav-community-container '
						onMouseEnter={() => setCommIcon(true)}
						onMouseLeave={() => setCommIcon(false)}
					>
						{commIcon ? <TiGroup /> : <TiGroupOutline />}
						<NavLink
							to={{ pathname: 'https://community.sephora.com/' }}
							target='_blank'
							className='font-14'
							style={{ textDecoration: 'none' }}
						>
							<div className='community-text font-14'>Community</div>
						</NavLink>
					</div>
					<div className='acct-buttons'>
						{/* {sessionLinks} */}
						<ProfileButton />

						<div className='heart-dropdown-container'>
							{sessionUser ? (
								<>
									<NavLink
										className='navbar-hearts'
										to={`/loves/${sessionUser.id}`}
										onMouseEnter={() => setHeartIcon(true)}
										onMouseLeave={() => setHeartIcon(false)}
									>

									<LovesDropDown/>

									</NavLink>
								</>
							) : (
								<button
									onClick={() => setShowLoginModal(true)}
									style={{ backgroundColor: 'white', width: '30%' }}
									onMouseEnter={() => setHeartIcon(true)}
									onMouseLeave={() => setHeartIcon(false)}
								>
									<LovesDropDown/>

								</button>
							)}
						</div>
						<div className='basket-dropdown-container'>
							{sessionUser ? (
								<NavLink to={`/basket/${sessionUser.id}`} >
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
