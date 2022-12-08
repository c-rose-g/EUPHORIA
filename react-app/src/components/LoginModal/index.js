import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import { Modal } from '../../context/Modal';
import SignUpModal from '../SignUpModal';

const LoginModal = ({ setShowLoginModal }) => {
	const [email, setEmail] = useState('');
	const history = useHistory()
	const [showSignUpFromLogin, setShowSignUpFromLogin] = useState(false);

	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);

	//error handling useState
	const [emailErr, setEmailErr] = useState('');
	const [passwordErr, setPasswordErr] = useState('');
	const [renderErr, setRenderErr] = useState(false);

	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	const openSignUpModal = () => {
		setShowSignUpFromLogin(true);
	};
	const closeBothModals = () => {
		setShowLoginModal(false);
		setShowSignUpFromLogin(false);
	};

	const validateEmail = (email) => {
		return /\S+@\S+\.\S+/.test(email);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		setRenderErr(true);
		let data;
		if( !emailErr && !passwordErr){
		data = await dispatch(login(email, password));

		};
		if (data) {
			// let err = {};
			setEmailErr(data)
			setPasswordErr(data)
			for (let error of data) {
				console.log('error', error);
				if (error.startsWith('Email')) {
					setEmailErr('Invalid Email');
				}
				if (error.startsWith('Password')) {
					setPasswordErr('Password was incorrect');
				}
				if(error.includes('Email provided not found')){
					setEmailErr('Email provided not found.')
				}
				if(error.includes('No such user exists')){
					setPasswordErr('No such user exists')

				}
			}

			setShowLoginModal(true);
		}
	};
	/********************Use Effect******************* */

	useEffect(() => {
		//email error handling
		if (!email.trim().length) {
			setEmailErr('email is required')
		} else if (email.trim().length && !validateEmail(email)) {
			setEmailErr('invalid email')
		}
		else {
			setEmailErr("")
		}
		//password error handling
		if (!password.trim().length) {
			setPasswordErr('password is required')
		} else if (password.trim().length && password.length < 6) {
			setPasswordErr('password must be greater than 6 characters')
		}
		else {
			setPasswordErr("")
		}
	}, [email, password])

	// demo user login
	const log = async (e) => {
		e.preventDefault();
		const data = await dispatch(login('demo@aa.io', 'password'));
		history.push('/')
		setShowLoginModal(false);

		if (data) {
			setShowLoginModal(true);
		}
	};

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};


	return (
		<>
			<div className='modal-form-container'>
				<form className='login-modal-form' onSubmit={handleLogin}>
					<div id='login-title-div'>
						<h2 className='font-16'>Sign in</h2>
					</div>
					<div className='inputs-row-div'>
						<div>
							{renderErr && emailErr ? (
								<label className='text renderError font-16' htmlFor='email'> {emailErr}
								</label>
							) : (
								<label className='text noRenderError font-16' htmlFor='email'>
									Email
								</label>
							)}
						</div>
						<input
							type='text'
							className='modal-inp-row font-14'
							onChange={updateEmail}
							value={email}
							placeholder='Email'
						/>
					</div>
					<div className='inputs-row-div'>
						<div>
							{renderErr && passwordErr ? (
								<label className='text renderError font-16' htmlFor='password'>
									{passwordErr}
								</label>
							) : (
								<label
									className='text noRenderError font-16'
									htmlFor='password'
								>
									Password
								</label>
							)}
						</div>
						<input
							type='password'
							className='modal-inp-row font-14'
							onChange={updatePassword}
							value={password}
							placeholder='Password'
						/>
					</div>
					<div className='join-now-button-div'>
						<button button id='sign-in-now' className='font-14' type='submit'>
							Sign in
						</button>
						<div>
							<button onClick={log} id='demo-button'>
								Demo User
							</button>
						</div>
					</div>
					<div className='border-bottom'></div>
					<div className='join-now-button-div'>
						<div className='new-sephora-text font-16'>
							<strong>New to Euphoria?</strong>
						</div>
						<div>
							<div
								id='create-new-account-button'
								className='font-16'
								onClick={openSignUpModal}
							>
								Create an account
							</div>
						</div>
					</div>

					<div>
						{showSignUpFromLogin && (
							<Modal onClose={closeBothModals}>
								<SignUpModal setShowSignUpFromLogin={setShowSignUpFromLogin} />
							</Modal>
						)}
					</div>
				</form>
			</div>
		</>
	);
};
export default LoginModal;
