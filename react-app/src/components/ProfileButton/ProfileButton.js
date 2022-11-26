import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session'
import user from '../../Images/euphora-sign-in.png';

import '../NavBar/NavBar.css'

function ProfileButton(){
	const [dropMenu, setDropMenu] = useState(false)

  return(
    <div className="dropdown-container" onMouseEnter={() => setDropMenu(true)}
    onMouseLeave={() => setDropMenu(false)}>
    <button
							className='font-12'
							id='user-space-text'
							onMouseEnter={() => setDropMenu(true)}
							onMouseLeave={() => setDropMenu(false)}
						>
							<div className='nav-acct-img'>
								<img src={user} alt='user-icon' />
							</div>
							<div className='nav-sign-text'>
								<strong>Sign in</strong>
								<p /> for FREE Shipping 🚚
							</div>
						</button>
            {dropMenu && (
              <div className="profile-dropdown-signin">
              <div className="profile-signin"> Sign in </div>
              <div className="profile-login">Log in</div>
              </div>
            )}
    </div>
  )
}
export default ProfileButton
