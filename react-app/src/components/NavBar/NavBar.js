import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from '../ProfileButton/ProfileButton';
import { Modal } from '../../context/Modal';
import LoginModal from '../LoginModal';
import LovesDropDown from '../LovesDropDown';
import CheckoutDropDown from '../CheckOutDropDown';
import SearchBar from '../SearchBar';
import BasketCount from '../BasketCount';
import { TiGroupOutline, TiGroup } from 'react-icons/ti';
import {BsBasket2, BsBasket2Fill} from 'react-icons/bs'
import './NavBar.css';

const NavBar = () => {
	const dispatch = useDispatch();
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [commIcon, setCommIcon] = useState(false);
	const [heartIcon, setHeartIcon] = useState(false);
	const [coloredBasket, setColoredBasket] = useState(false)
	const sessionUser = useSelector((state) => state.session.user);

	let data;

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
						<SearchBar />
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
						<ProfileButton />


						<div className='heart-dropdown-container' >
							{sessionUser ? (
								<>
									<NavLink
										to={`/loves/${sessionUser.id}`}
										onMouseEnter={() => setHeartIcon(true)}
										onMouseLeave={() => setHeartIcon(false)}
									>
										<LovesDropDown />
									</NavLink>
								</>
							) : (
								<button
									onClick={() => setShowLoginModal(true)}
									style={{ backgroundColor: 'white', width: '30%' }}
									onMouseEnter={() => setHeartIcon(true)}
									onMouseLeave={() => setHeartIcon(false)}
								>
									<LovesDropDown />
								</button>
							)}
						</div>
						<div className='basket-dropdown-container'>
							{sessionUser ? (
								<>
									<BasketCount />
									<NavLink to={`/basket/${sessionUser.id}`}
										onMouseEnter={() => setColoredBasket(true)}
										onMouseLeave={() => setColoredBasket(false)}
										>
									<CheckoutDropDown />
									</NavLink>
								</>
							) : (
								<button
									// className='emoji-button'
									onClick={() => setShowLoginModal(true)}
									onMouseEnter={() => setColoredBasket(true)}
									onMouseLeave={() => setColoredBasket(false)}
									style={{backgroundColor:'transparent'}}
								>
								<CheckoutDropDown/>
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
