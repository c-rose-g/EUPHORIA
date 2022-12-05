import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import CategoriesNavBar from '../CategoriesNavBar';
import { loadPurchaseHistory } from '../../store/purchaseHistories';
import noHistory from '../../Images/purchaseHistory_euphoria.png'
import './PurchaseHistory.css';

const PurchaseHistory = () => {
	const [loaded, setLoaded] = useState(false);
	const { userId } = useParams();
	const dispatch = useDispatch();
	const user_history = useSelector((state) => state.history.purchaseHistory);
	console.log('user history ********', user_history);

	useEffect(() => {
		dispatch(loadPurchaseHistory(userId)).then(() => setLoaded(true));
	}, [dispatch]);
	return (
		<>
			{loaded && (
				<>
					<CategoriesNavBar />
					<div className='purchase-history-page-container'>
						<div className='basket-title-container'>
							<div className='basket-title font-24'>
								<strong>Buy it again</strong>
							</div>
						</div>
						<div className='purchase-history-rows-wrapper-no-history'>

								{!user_history.length && (<div className='ph-left-column-no-history'>
								<div className='ph-items-first'>

								<img src={noHistory}/>
								</div>
								<div className='font-20'>
								Please purchase items to see items in your history.
								</div>
								
								</div>)}
						</div>
						<div className='purchase-history-rows-wrapper'>
							<div className='ph-left-column'>
								{user_history.map((order) => {
									return (
										<div className='ph-items-rows' key={order.id}>
											<div className='ph-item-left-column'>
												<div className='ph-item-img-container'>
													<img
														className='ph-item-img'
														src={order.prod_id.product_photos[0].prod_photo}
													/>{' '}
												</div>
											</div>
											<div className='ph-item-mid-column'>
												<div className='brand-price-row'>
													<div className='item-brand font-16'>
														<strong>{order.prod_id.product_brand}</strong>
													</div>
													<div className='item-price font-16'>
														<strong>${order.prod_id.product_price}</strong>
													</div>
												</div>
												<div className='purchase-history-item-row font-14'>
													{order.prod_id.product_name}{' '}
												</div>
												<NavLink
													to={`/products/${order.prod_id.id}`}
													style={{ textDecoration: 'none' }}
												>
													<div className='view-again-div'>
														<button className='view-again font-16-white'>
															view item
														</button>
													</div>
												</NavLink>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};
export default PurchaseHistory;
