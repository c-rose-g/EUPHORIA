import React, { useState, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

const LovesDropDown = () => {
	const dispatch = useDispatch();
	const loves = useSelector((state) => state.loves.loves);
	const [dropdown, setDropdown] = useState(false);

	return (
		<>
			<div
				className='loves-dropdown-container'
				onMouseOver={() => setDropdown(true)}
				onMouseLeave={() => setDropdown(false)}
			>
				<button>
					<img src={dropdown ? BsSuitHeartFill : BsSuitHeart} />
				</button>
        {dropdown ? (<div className='loves-dropdown-page' style={{transition: 'all .2s linear 0s'}}> </div>):(<div></div>)}
			</div>
		</>
	);
};

export default LovesDropDown;
