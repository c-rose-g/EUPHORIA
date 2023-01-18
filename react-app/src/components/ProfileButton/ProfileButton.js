import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import SignUpModal from '../SignUpModal';
import LoginModal from '../LoginModal';
import LogoutButton from '../auth/LogoutButton';
import user from '../../Images/euphora-sign-in.png';
import activeUser from '../../Images/euphoria-user-active.png';
import profileButtonUser from '../../Images/euphoria-profile-user-large.png';
import sub from '../../Images/euphoria-subscription.png';
import '../NavBar/NavBar.css';

function ProfileButton() {
	const [showSignUpModal, setShowSignUpModal] = useState(false);
	const [showLoginModal, setShowLoginModal] = useState(false);
	const [dropMenu, setDropMenu] = useState(false);
	const [profileTransition, setProfileTransition] = useState('');
	const [date, setDate] = useState(new Date());
	const [hour, setHour] = useState(date.getHours());
	const [currentTime, setCurrentTime] = useState('hello');
	const signedInUser = useSelector((state) => state.session.user);

	useEffect(() => {
		if (hour < 12) {
			setCurrentTime(' Good morning,');

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

	const changeClassName = () => {
		if (dropMenu) {
			setProfileTransition('profile-button-onLeave');
		} else {
			setProfileTransition('');
		}
	};
	return (
		<div
			className='dropdown-container'
			onMouseEnter={() => setDropMenu(true)}
			onMouseLeave={() => setDropMenu(false)}
		>
			<button className='font-14' id='user-space-text'>
				<div className='nav-acct-img'>
					<img src={dropMenu ? activeUser : user} />
				</div>
				<div className='nav-sign-text'>
					{signedInUser
						? 'Hi, ' + signedInUser.first_name
						: ('Sign in to shop EUPHORIA')}
				</div>
			</button>
			{dropMenu ? (
				<div
					className='profile-dropdown-signin'
					style={{ transition: 'all .2s linear 0s' }}
				>
					<div className='img-greetings'>
						<div className='profile-img-container'>
							<img className='profile-img' src={profileButtonUser} alt='' />
						</div>
						<div className='profile-greeting font-16'>
							{currentTime}{' '}
							{signedInUser ? signedInUser.first_name : 'Beautiful'}💋
						</div>
					</div>
					{signedInUser ? (
						<div className='signin-login-buttons-container'></div>
					) : (
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
					)}

						{signedInUser ? (
							<div className='buy-it-again-container-signed-in'>
							<div><img src={sub} /></div>
							<NavLink
								className=' remove-underline'
								to={`/history/${signedInUser.id}`}
							>
								<button
									className='buy-it-again-button-signed-in remove-underline'
									type='button'
								>
									<div className='font-16 remove-underline'>Buy it again</div>
									<div className='font-12' type='button' style={{color:'grey'}}>Reorder from your online purchases</div>
								</button>
							</NavLink>
							</div>

							):(<div className='buy-it-again-container'>
							<div><img src={sub} /></div>
								<button
									className='buy-it-again-button remove-underline'
									onClick={closeForLogin}
								>
									<div className='font-16'>Buy it again</div>
									<div className='font-12' style={{color:'grey'}}>Reorder from your online purchases</div>
								</button>
							</div>)}

					{signedInUser ? (
						<div
							className='logout-button-container'
							onClick={() => setDropMenu(false)}
						>
							{' '}
							<LogoutButton />
						</div>
					) : (
						<div className='no-logout-button-container'></div>
					)}
				</div>
			) : (
				<div
					className='profile-dropdown-signin'
					style={{
						visibility: 'hidden',
						opacity: '0',
						transform: 'translateY(8px)',
					}}
				>
					<div className='profile-img-container'>
						<img className='profile-img' src={activeUser} alt='' />
					</div>
					<div className='profile-greeting'>
						{currentTime} {signedInUser ? signedInUser.first_name : 'Beautiful'}
						💋
					</div>
					<div>
						{signedInUser ? null : (
							<button className='profile-login' onClick={closeForLogin}>
								Sign in
							</button>
						)}
						{signedInUser ? null : (
							<button className='profile-signin' onClick={closeForSignUp}>
								Create Account
							</button>
						)}
					</div>
					<div>
						{signedInUser ? (
							<NavLink
								className='buy-it-again'
								to={`/history/${signedInUser.id}`}
							>
								<button>Buy it again</button>
							</NavLink>
						) : (
							<button className='profile-login' onClick={closeForLogin}>
								Buy it again
							</button>
						)}
					</div>
					{signedInUser ? (
						<div onClick={() => setDropMenu(false)}>
							{' '}
							<LogoutButton />
						</div>
					) : null}
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
