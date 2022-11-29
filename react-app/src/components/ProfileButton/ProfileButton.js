import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import * as sessionActions from '../../store/session';
import { Modal } from '../../context/Modal';
import SignUpModal from '../SignUpModal';
import LoginModal from '../LoginModal';
import user from '../../Images/euphora-sign-in.png';
import activeUser from '../../Images/euphoria-user-active.png';
import LogoutButton from '../auth/LogoutButton';
import '../NavBar/NavBar.css';
import { useSelector } from 'react-redux';

function ProfileButton() {
	const [showSignUpModal, setShowSignUpModal] = useState(false);
	// const [timeEmoji, setTimeEmoji] = useState('hi')
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [dropMenu, setDropMenu] = useState(false);
	const [date, setDate] = useState(new Date());
	const [hour, setHour] = useState(date.getHours());
	const [currentTime, setCurrentTime] = useState('hello');
	const signedInUser = useSelector((state) => state.session.user);
	// console.log('signed in user >>>', signedInUser);
	useEffect(() => {
		if (hour < 12) {
			setCurrentTime(' Good morning,');
			// setTimeEmoji()
		} else if (hour < 18) {
			setCurrentTime(' Good afternoon,');
		} else {
			setCurrentTime(' Good evening,');
		}
	}, [hour]);

	// helper functions
	const closeForSignUp = () => {
		setDropMenu(false);
		setShowSignUpModal(true);
	};

	const closeForLogin = () => {
		setDropMenu(false);
		setShowLoginModal(true);
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
					{signedInUser
						? 'Hi, ' + signedInUser.first_name
						: 'Sign in for FREE Shipping 🚚'}
				</div>
			</button>
			{dropMenu && (
				<div className='profile-dropdown-signin'>
					<div>
						<img src={activeUser} alt='' />
					</div>
					<div>
						{' '}
						{currentTime} {signedInUser ? signedInUser.first_name : 'Beautiful'}{' '}
						💋
					</div>
					<div>

						<button className='profile-signin' onClick={closeForSignUp}>
							Sign Up
						</button>
					</div>
					<div>
					<button className='profile-login' onClick={closeForLogin}>
						Log in
					</button>
					</div>
					<div>
						<button>
							Buy it again
						</button>
					</div>
					{signedInUser ? (<div onClick={() => setDropMenu(false)}> <LogoutButton/></div>):null}
				</div>
			)}

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
	);
}
export default ProfileButton;
