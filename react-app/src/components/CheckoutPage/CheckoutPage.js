import React, { useEffect, useState } from 'react';
import CategoriesNavBar from '../CategoriesNavBar';
import {
	loadUserCart,
	increaseItem,
	decrementItem,
} from '../../store/shoppingCarts';
import { addToPurchaseHistory } from '../../store/purchaseHistories';
import { allProducts } from '../../store/products';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './CheckoutPage.css';

const CheckoutPage = ({ setShowLoginModal }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { userId } = useParams();
	const [loaded, setLoaded] = useState(false);
	// obj of userbasket
	const userBasket = useSelector((state) => state.basket.userBasket);
	// const testItems = useSelector((state) => state.basket.userBasket?.cart_prod);
	const products = useSelector((state) => state.products.allProducts);

	// array of user items
	const items = userBasket.cart_prod ? Object.values(userBasket.cart_prod) : [];

	useEffect(() => {
		(async () => {
			await dispatch(allProducts());
			await dispatch(loadUserCart(userId));
			setLoaded(true);
		})();
	}, [dispatch]);

	async function addMore(props) {
		await dispatch(increaseItem({ productId: props }));
	}

	const deleteItem = (props) => {
		dispatch(decrementItem(props));
	};

	const handleCheckout = () => {
		dispatch(addToPurchaseHistory(userId));
		alert('Your order has been added to your purchase history.');
		history.push(`/history/${userId}`);
	};

	let basketTotal = 0;

	return (
		<>
			{loaded && (
				<>
					<CategoriesNavBar />
					<div className='checkout-page-container'>
						<div className='basket-title-container font-20'>
							<b className='basket-title'>My Basket</b>
						</div>
						<div className='checkout-basket-container'>
							<div className='checkout-columns-container'>
								<div className='checkout-left-column'>
									<div className='basket-items-rows'>
										{!items.length && (
											<div>
												<div
													className='font-20'
													style={{ display: 'flex', justifyContent: 'center' }}
												>
													Please add items to your basket
												</div>
											</div>
										)}
										{items.map((item) => (
											<div className='checkout-item' key={item.id}>
												<div className='checkout-item-left-column'>
													<img
														className='item-image'
														src={
															products[item.prod_id].product_photos[0]
																.prod_photo
														}
													/>
												</div>
												<div className='checkout-item-right-column'>
													<div className='brand-price-row'>
														<div className='item-brand font-16'>
															{products[item.prod_id].product_brand}
														</div>

														<div className='item-price font-16' key={item.id}>
															<strong>
																$
																{(
																	item.prod_quantity *
																	products[item.prod_id].product_price
																).toFixed(2)}
															</strong>
														</div>
													</div>
													<div className='item-name font-14'>
														{products[item.prod_id].product_name}
													</div>
													<div className='item-change-buttons-container'>
														<button
															className='item-minus'
															onClick={() => deleteItem(item.id)}
														>
															<i className='fa-solid fa-minus item-minus'></i>
														</button>
														<div className='item-quantity'>
															{item.prod_quantity}
														</div>
														<button
															className='item-add'
															onClick={() => addMore(item.prod_id)}
														>
															<i class='fa-solid fa-circle-plus item-add'></i>
														</button>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
								<div className='checkout-right-column'>
									{items.forEach((item) => {
										basketTotal +=
											item.prod_quantity * products[item.prod_id].product_price;
									})}
									<div className='estimated-total font-18'>
										<strong>Estimated Total:</strong> ${basketTotal}
									</div>
									<div></div>
									{items.length ? (
										<div className='checkout-button-div'>
											<button
												className='checkout-button font-16-white'
												onClick={handleCheckout}
											>
												checkout
											</button>
										</div>
									) : null}
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};
export default CheckoutPage;
