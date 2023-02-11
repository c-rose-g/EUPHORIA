import React, {useState, useSelector} from 'react'
import { useDispatch } from 'react-redux';

const LovesDropDown = () => {
  const dispatch = useDispatch()
  const loves = useSelector(state => state.loves.loves)
  
  return(
    <h1> this is the loves drop down menu</h1>
  )
};

export default LovesDropDown;
