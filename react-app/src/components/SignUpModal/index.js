import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import '../../context/Modal.css';

const SignUpModal = ({ setShowSignUpModal, setShowSignUpFromLogin }) => {
	const [errors, setErrors] = useState([]);
	const [signUpModal, setSignUpModal] = useState(false);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	//error handling useState
	const [emailErr, setEmailErr] = useState('');
	const [firstNameErr, setFirstNameErr] = useState('');
	const [passwordErr, setPasswordErr] = useState('');
	const [lastNameErr, setLastNameErr] = useState('');
	const [confirmPasswordErr, setConfirmPasswordErr] = useState('');
	// const [confirmEmail, setConfirmEmail] = useState('')
	const [renderErr, setRenderErr] = useState(false);
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	// helper functions
	const validateEmail = (email) => {
		return /\S+@\S+\.\S+/.test(email);
	};

	const onSignUp = async (e) => {
		e.preventDefault();
		setRenderErr(true);

		let data;
		if (password === confirmPassword && !confirmPasswordErr && !emailErr && !firstNameErr && !lastNameErr && !passwordErr) {
			data = await dispatch(
				signUp({
					first_name: firstName,
					last_name: lastName,
					email: email,
					password: password,
				})
			);
			// setSignUpModal(false);
					// setShowSignUpModal(false);
			// setShowSignUpFromLogin(false);

			// console.log('set show sign up modal',signUpModal)
		}
		if (data) {
			for (let error of data){
				if(error.startsWith('email')) setEmailErr('Email address is already in use')
			}
			setErrors(data);
			console.log('errrross',errors)
			setSignUpModal(true);
			console.log('set show sign up modal', signUpModal);

			// setShowSignUpModal(true);
			// setShowSignUpFromLogin(true);
		}
	};
	// // helper functions
	// const validateEmail = (email) => {
	// 	return /\S+@\S+\.\S+/.test(email);
	// };

	const updateFirstName = (e) => {
		setFirstName(e.target.value);
	};

	const updateLastName = (e) => {
		setLastName(e.target.value);
	};
	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	const updateConfirmPassword = (e) => {
		setConfirmPassword(e.target.value);
	};

	/********************Use Effect******************* */

	useEffect(() => {
		//email error handling

		if (email.trim().length && !validateEmail(email)) {
			setEmailErr('invalid email');
		} else if (!email.trim().length) {
			setEmailErr('email is required');
		} else {
			setEmailErr('');
		}

		//firstName error handling
		if (firstName.trim().length < 4) {
			setFirstNameErr('first name must be at least 4 characters');
		} else if (firstName.trim().length > 10) {
			setFirstNameErr('first name must be less than 10 characters ');
		} else {
			setFirstNameErr('');
		}

		//lastName error handling
		if (lastName.trim().length < 4) {
			setLastNameErr('Last name must be at least 4 characters');
		} else if (lastName.trim().length > 10) {
			setLastNameErr('Last name must be less than 10 characters ');
		} else {
			setLastNameErr('');
		}
		//password error handling
		if (!password.trim().length) {
			setPasswordErr('password is required');
		} else if (password.trim().length && password.length < 6) {
			setPasswordErr('password must be greater than 6 characters');
		} else {
			setPasswordErr('');
		}

		if (!confirmPassword.trim().length) {
			setConfirmPasswordErr('Confirm password is required');
		} else if (password !== confirmPassword) {
			setConfirmPasswordErr('Passwords must match');
		} else {
			setConfirmPasswordErr('');
		}
	}, [firstName, lastName, email, password, confirmPassword]);
	if (user) {
		return <Redirect to='/' />;
	}

	return (
		<div className='modal-form-container'>
			<form className='modal-form' onSubmit={onSignUp}>
				<div id='signup-title-div'>
					<h2 className='font-16'>Create an Account</h2>
				</div>
				<div className='inputs-row-div'>
					<div>
						{renderErr && firstNameErr ? (
							<label className='text renderError font-16' htmlFor='firstName'>
								First Name: {firstNameErr}
							</label>
						) : (
							<label className='text noRenderError font-16' htmlFor='firstName'>
								First Name
							</label>
						)}
					</div>
					<input
						type='text'
						className='modal-inp-row font-14'
						onChange={updateFirstName}
						value={firstName}
						placeholder='First name'
					/>
				</div>
				<div className='inputs-row-div '>
					<div>
						{renderErr && lastNameErr ? (
							<label className='text renderError font-16' htmlFor='LastName'>
								Last Name: {lastNameErr}
							</label>
						) : (
							<label className='text noRenderError font-16' htmlFor='LastName'>
								Last Name
							</label>
						)}
					</div>
					<input
						type='text'
						className='modal-inp-row font-14'
						onChange={updateLastName}
						value={lastName}
						placeholder='Last Name'
					/>
				</div>
				<div className='inputs-row-div'>
					<div>
						{renderErr && emailErr ? (
							<label className='text renderError font-16' htmlFor='email'>
								{emailErr}
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
						placeholder='Email address'
					/>
				</div>
				<div className='inputs-row-div'>
					<div>
						{renderErr && passwordErr ? (
							<label className='text renderError font-16' htmlFor='password'>
								Password: {passwordErr}
							</label>
						) : (
							<label className='text noRenderError font-16' htmlFor='password'>
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
				<div className='inputs-row-div'>
					<div>
						{renderErr && confirmPasswordErr ? (
							<label className='text renderError font-16' htmlFor='confirmPassword'>
								Confirm Password: {confirmPasswordErr}
							</label>
						) : (
							<label className='text noRenderError font-16' htmlFor='confirmPassword'>
								Confirm Password
							</label>
						)}
					</div>
					<input
						type='password'
						className='modal-inp-row font-14'
						onChange={updateConfirmPassword}
						value={confirmPassword}
						placeholder='Password'
					/>
				</div>

				<div className='sign-in-now-buttton-div'>
					<button id='join-now' className='font-14' type='submit'>
						Join Now
					</button>
				</div>
			</form>
		</div>
	);
};
export default SignUpModal;
