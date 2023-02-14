import React, {useState, useSelector} from 'react'
import { useDispatch } from 'react-redux';


const LovesDropDown = () => {
  const dispatch = useDispatch()
  const loves = useSelector(state => state.loves.loves)
  const [dropdown, setDropdown] = useState(false)
  

  return(
    <>
    <div className='loves-dd-border'
    onMouseOver={() => setDropdown(true)}
    onMouseLeave={() => setDropdown(false)}
     >
      <div className='loves-dd-map'>

      </div>

    </div>
    </>
  )
};

export default LovesDropDown;
