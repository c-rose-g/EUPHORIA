import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadUserCart } from '../../store/shoppingCarts';
import './index.css';

const CheckoutDropDown = () => {
  const dispatch = useDispatch()
	const [dropdown, setDropdown] = useState(false);
	const user = useSelector((state) => state.session.user);
	const userBasket = useSelector((state) => state.basket.userBasket);
	const basketItems = userBasket.cart_prod ? Object.values(userBasket.cart_prod) : [];
  console.log('drop down ', dropdown)
  useEffect(() =>{
    async function fetchUserCart(){
      await dispatch(loadUserCart(user.id))
    }
    fetchUserCart()
  },[dispatch, user])

  return (
		<div
			className='checkout-dropdown-container'
			onMouseEnter={() => setDropdown(true)}
			onMouseLeave={() => setDropdown(true)}
		>
    <div className='checkout-dropdown'>
			{dropdown ? (
				<div
					style={{ transition: 'all .1s linear 0s' }}
				>
        {user ? (
          <>
          <div className='checkout-title'>
						<div className='font-20'>Basket</div>
						<div>
							<NavLink to={`/basket/${user.id}`} className='remove-underline font-20'>View All</NavLink>
						</div>
					</div>
					<div className='checkout-content'></div>
					<div className='checkout-button-container'></div>
          </>
          ):(<>
            <div className='checkout-title'>
						<div className='font-20'>Basket</div>

					</div>
					<div className='checkout-content'></div>
					<div className='checkout-button-container'></div>
          </>)}

				</div>
			) : (
				<div
					className='checkout-not-signedin-user'
					style={{
						visibility: 'hidden',
						opacity: '0',
						transform: 'translateY(8px)',
            transition: 'all 0.1s ease 0s;'
					}}
				></div>
			)}
    </div>
		</div>
	);
};
export default CheckoutDropDown;
