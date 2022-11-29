import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
const LoginModal = ({ setShowLoginModal }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState([]);
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();

	// useEffect(() =>{
	// 	if(!email)
	// })

	const updateEmail = (e) => {
		setEmail(e.target.value);
	};

	const updatePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const data = await dispatch(login(email, password));
		if (data) {
			setErrors(data);
		}
		setShowLoginModal(false);
	};

	if (user) {
		return <Redirect to='/' />;
	}
	return (
		<div>
			<form onSubmit={handleLogin}>
				<div>Sign in</div>
				<div>
					<label>Email</label>
					<input
						type='text'
						className=''
						onChange={updateEmail}
						value={email}
						// placeholder='your mom'
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						type='text'
						className=''
						onChange={updatePassword}
						value={password}
					/>
				</div>
				<div>
					<button>Sign in</button>
				</div>
				<div>
					<label>new to sephora?</label>
					<button>Create an account</button>
				</div>
			</form>
		</div>
	);
};
export default LoginModal;
