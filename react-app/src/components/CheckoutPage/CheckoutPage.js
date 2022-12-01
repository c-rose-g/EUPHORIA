import React from 'react';
import CategoriesNavBar from '../CategoriesNavBar';
const CheckoutPage = () => {

	return (
  <div className='checkout-page-container'>
    <CategoriesNavBar/>
     <div className='checkout-basket-container'>
       <div className='checkout-rows-container'>
         <div className='font-20'><b>Basket</b></div>
         <div className='checkout-columns-container'>
            <div className='checkout-left-column'> shopping cart items</div>
            <div className='checkout-right-column'> total and checkout button</div>
         </div>
      </div>
    </div>
  </div>
  )
};
export default CheckoutPage;
