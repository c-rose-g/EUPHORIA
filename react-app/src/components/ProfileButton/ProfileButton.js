import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Modal } from '../../context/Modal';
import SignUpModal from '../SignUpModal';
import user from '../../Images/euphora-sign-in.png';
import activeUser from '../../Images/euphoria-user-active.png';
import '../NavBar/NavBar.css';

function ProfileButton() {
	const [showSignUpModal, setShowSignUpModal] = useState(false);
	// console.log('this is sign up modal ', showSignUpModal)
	// const [showLoginShowModal, setLoginShowModal] = useState(false);
	const [dropMenu, setDropMenu] = useState(false);
	// console.log('this is drop menu', dropMenu)
	const [date, setDate] = useState(new Date());
	const [hour, setHour] = useState(date.getHours());
	const [currentTime, setCurrentTime] = useState('hello');

	useEffect(() => {
		if (hour < 12) {
			setCurrentTime(' Good morning');
		} else if (hour < 18) {
			setCurrentTime(' Good afternoon');
		} else {
			setCurrentTime(' Good evening');
		}
	}, [hour]);

	// helper functions
	const closeDropMenu = () => {
		setDropMenu(false);
		setShowSignUpModal(true);
	};

	return (
		<div
			className='dropdown-container'
			onMouseEnter={() => setDropMenu(true)}
			onMouseLeave={() => setDropMenu(false)}
		>
			<button className='font-12' id='user-space-text'>
				<div className='nav-acct-img'>
					<img src={dropMenu ? activeUser : user} />
				</div>
				<div className='nav-sign-text'>
					<strong>Sign in</strong>
					<p /> for FREE Shipping 🚚
				</div>
			</button>
			{dropMenu && (
				<div className='profile-dropdown-signin'>
					<div>
						<img src={activeUser} alt='' />
					</div>
					<div> {currentTime} Beautiful 💋</div>
					<div>
						<button className='profile-signin' onClick={closeDropMenu}>
							Sign Up
						</button>
					</div>

					<button className='profile-login'>Log in</button>
				</div>
			)}
			<div>
				{ showSignUpModal && (
					<Modal onClose={() => setShowSignUpModal(false)}>
						<SignUpModal setShowSignUpModal={setShowSignUpModal} />
					</Modal>
				)}
			</div>
		</div>
	);
}
export default ProfileButton;
