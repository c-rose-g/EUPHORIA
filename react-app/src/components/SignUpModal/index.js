import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import '../../context/Modal.css';

const SignUpModal = ({ setShowSignUpModal }) => {
	// const [errors, setErrors] = useState([]);
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatPassword, setRepeatPassword] = useState('');
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	// useEffect(() => {
	//   let errors = {}
	//   if(!firstName){

	//   }
	// })
	const onSignUp = async (e) => {
		e.preventDefault();
		if (password === repeatPassword) {
			// console.log('this is first name ', firstName);
			// console.log('this is last name ', lastName);

			const data = await dispatch(
				signUp({
					first_name: firstName,
					last_name: lastName,
					email: email,
					password: password,
				})
			);
			setShowSignUpModal(false);
			// if (data) {
			// 	setErrors(data);
			// }
		}
	};

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

	const updateRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
	};

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
					<input
						type='text'
						className='modal-inp-row'
						onChange={updateFirstName}
						value={firstName}
					/>
					<label className='fn-label-transition font-14'>First Name</label>
					<div className='label-inp-div'>
						<input
							type='text'
							className='modal-inp-row'
							onChange={updateLastName}
							value={lastName}
							// placeholder={'Last Name'}
						/>
						<label className={ firstName? 'ln-label-transition font-14':'ln-label-nontransition font-14'}>Last Name</label>
					</div>
				</div>
				<div className='inputs-columns-div'>
					<input
						type='text'
						className='modal-inp'
						onChange={updateEmail}
						value={email}
					/>
					<label className='ea-label-transition font-14'>Email Address</label>
					<input
						type='text'
						className='modal-inp'
						onChange={updatePassword}
						value={password}
					/>
					<label className='p-label-transition font-14'>
						Password (6 to 12 characters)
					</label>
					<input
						type='text'
						className='modal-inp'
						onChange={updateRepeatPassword}
						value={repeatPassword}
					/>
					<label className='cp-label-transition font-14'>
						Confirm Password
					</label>
					<div className='join-now-button-div'>
						<button id='join-now' className='font-14' type='submit'>
							Join Now
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};
export default SignUpModal;
