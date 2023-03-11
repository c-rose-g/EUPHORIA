import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUserCart } from '../../store/shoppingCarts';
import { allProducts } from '../../store/products';
import './index.css';

const BasketCount = () => {
	const dispatch = useDispatch();
	const [showCount, setShowCount] = useState(false);
	const signedInUser = useSelector((state) => state.session.user);
	const userBasket = useSelector((state) => state.basket.userBasket);
	const items = userBasket.cart_prod ? Object.values(userBasket.cart_prod) : [];

	useEffect(() => {
		async function fetchUserCart() {
			if (signedInUser) {
				await dispatch(allProducts());
				await dispatch(loadUserCart(signedInUser.id));
			}
		}
		fetchUserCart();
	}, [dispatch, signedInUser]);
	return (
		<div className='basket-count-container'>
			{items.length > 0 ? (
				<div className='basket-count-number font-12-white'>
					{items.length > 0 && items.length}
				</div>
			) : (
				null
			)}
		</div>
	);
};
export default BasketCount;
