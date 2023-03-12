import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUserCart } from '../../store/shoppingCarts';
// import { allProducts } from '../../store/products';
import './index.css';

const BasketCount = () => {
	const dispatch = useDispatch();
	const [showCount, setShowCount] = useState(false);
	const user = useSelector((state) => state.session.user);
	const userBasket = useSelector((state) => state.basket.userBasket);
	const basketItems = userBasket.cart_prod ? Object.values(userBasket.cart_prod) : [];

	useEffect(() => {
		async function fetchUserCart() {
			if (user) {
				// await dispatch(allProducts());
				await dispatch(loadUserCart(user.id));
			}
		}
		fetchUserCart();
	}, [dispatch, user]);
	return (
		<div className='basket-count-container'>
			{basketItems.length > 0 ? (
				<div className='basket-count-number font-12-white'>
					{basketItems.length > 0 && basketItems.length}
				</div>
			) : (
				null
			)}
		</div>
	);
};
export default BasketCount;
