import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addToCart } from '../../store/shoppingCarts';
import './BasketButton.css';
const AddToBasketButton = ({ productId, basketId }) => {
	const dispatch = useDispatch();

	const handleAddToCart = async (e) => {
		e.preventDefault();
		const payload = {
			productId,
			prod_quantity: 1,
			basketId,
		};

		await dispatch(addToCart(payload));
		return <Redirect to={`/products/${productId}`} />;
	};

	return (
		<div>
			{
				<button
					className='add-button-not-pressed font-16-white'
					type='button'
					onClick={handleAddToCart}
				>
					Add to Basket
				</button>
			}
		</div>
	);
};

export default AddToBasketButton;
