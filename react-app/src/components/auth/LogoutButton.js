import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import '../NavBar/NavBar.css'
const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button className='logout-button font-16' onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
