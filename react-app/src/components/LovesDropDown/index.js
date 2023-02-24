import React, { useState, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

import './index.css';
const LovesDropDown = () => {
	const dispatch = useDispatch();
	// const loves = useSelector((state) => state.loves.loves);
	const [dropdown, setDropdown] = useState(false);
	// const userloves = useSelector((state) => Object.values(state.loves.loves));

	// const SignUser = useSelector(state => state.session.user);
	// console.log(SignUser)

	return (
		// <>
		<div
			className='loves-dropdown-container'
			onMouseOver={() => setDropdown(true)}
			onMouseLeave={() => setDropdown(false)}
			// style={{ backgroundColor: 'white' }}
		>
			<button
				className='loves-dropdown-button'
				// style={{ backgroundColor: 'white'}}
			>
				{dropdown ? (
					<div className='loves-dropdown-heart'>
						<BsSuitHeartFill />
					</div>
				) : (
					<BsSuitHeart />
				)}
			</button>
			{/* <div className='loves-dropdown-list' style={{transition: 'all .2s linear 0s'}}>list goes here</div> */}
			{/* style={{  transition: 'color 0.2s ease 0s'}} */}
			{dropdown && (
				<div
					className='loves-dropdown-page'
					style={{ transition: 'all .8s linear 0s' }}
				>
					{/* {SignUser ? '    list goes here' : '   need to sign in'} */}
				</div>
			)}
		</div>
		// </>
	);
};

export default LovesDropDown;
