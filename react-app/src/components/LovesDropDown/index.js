import React, { useState, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
// import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import './index.css';
const LovesDropDown = () => {
	const dispatch = useDispatch();
	// const loves = useSelector((state) => state.loves.loves);
	const [dropdown, setDropdown] = useState(false);
	// const userloves = useSelector((state) => Object.values(state.loves.loves));
	// NOTE vvv why tf is this not working vvv
	// const SignUser = useSelector(state => state.session.user);
	// console.log(SignUser)
// <div className='loves-dropdown-heart'><BsSuitHeartFill /></div>
	return (
		<div
			className='loves-dropdown-container'
			onMouseOver={() => setDropdown(true)}
			onMouseLeave={() => setDropdown(false)}
		>
			<button className='loves-dropdown-button'>
        <div>
				{dropdown ? (<BsSuitHeartFill />) : (<BsSuitHeart />)}
        {/* <img src={dropdown ? (<BsMoonStarsFill />) : (<BsMoonStars />) } /> */}
        </div>
			</button>

			{dropdown && (
				<div
					className='loves-dropdown-page'
					// style={{ transition: 'all .8s linear 0s' }}
				>
					{/* {SignUser ? '    list goes here' : '   need to sign in'} */}
          list goes here
				</div>
			)}
		</div>
	);
};

export default LovesDropDown;
