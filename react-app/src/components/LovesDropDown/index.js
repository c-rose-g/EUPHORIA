import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

import './index.css';
const LovesDropDown = () => {
	const dispatch = useDispatch();
	const loves = useSelector(state => state.loves.loves);
  console.log('this is loves', loves)
	const [dropdown, setDropdown] = useState(false);
	// const userloves = useSelector((state) => Object.values(state.loves.loves));
	// NOTE vvv why tf is this not working vvv
	const SignUser = useSelector(state => state.session.user);
	// console.log(SignUser)
// <div className='loves-dropdown-heart'><BsSuitHeartFill /></div>
	return (
		<div
			className='loves-dropdown-container'
			onMouseOver={() => setDropdown(true)}
			onMouseLeave={() => setDropdown(true)}
		>
			<button className='loves-dropdown-button'>

				{dropdown ? (<BsSuitHeartFill />) : (<BsSuitHeart />)}

			</button>

			{dropdown && (
				<div
					className='loves-dropdown-page'
					style={{ transition: 'all .8s linear 0s' }}
				>
					{SignUser ? '    list goes here' : (<> <div> Recently Loved</div> <div>Use your Loves list to keep track of your favorite products.</div></>)}
				</div>
			)}
		</div>
	);
};

export default LovesDropDown;
