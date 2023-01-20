import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import CategoriesNavBar from '../CategoriesNavBar';
import LoveButton from '../LovesButton';
import { loadLoves } from '../../store/loves';
import './LovesPage.css';
const LovesPage = () => {
	const dispatch = useDispatch();
	const [loaded, setLoaded] = useState(false);
	const user = useSelector((state) => state.session.user);
	const userloves = useSelector((state) => Object.values(state.loves.loves));
	// console.log('user loves', userloves);

	if (user) {
	}
	useEffect(() => {
		dispatch(loadLoves(user.id)).then(() => setLoaded(true));
	}, [dispatch]);
	return (
		<>
			{loaded && (
				<>
					<CategoriesNavBar />
					<div className='lp-container'>
						<div className='lp-title-container'>
							<div className='lp-title font-32'>
                            Loves
							</div>
						</div>
						<div className='lp-rows-wrapper'>
							<div className='lp-left-column'>
								{userloves.map((product) => (
									<>
										<div className='lp-item-rows'>
											<div className='lp-item-left-column' key={product.id}>
												<div className='lp-item-img-container'>
													<img
														className='lp-item-img'
														src={product.prod_id.product_photos[0].prod_photo}
													></img>
												</div>
											</div>
											<div className='lp-item-mid-column'>
												<div className='lp-brand-price-row'>
													<div className='item-brand font-16'>
														<strong>{product.prod_id.product_brand}</strong>
													</div>
													<div className='lp-item-price font-16'>
														{product.prod_id.product_price}
													</div>
												</div>

												<div className='lp-item-row font-14'>
													{product.prod_id.product_name}
												</div>
											</div>
											<div className='lp-right-column'>
												<NavLink
													to={`/products/${product.prod_id.id}`}
													className='remove-underline'
                                                    style={{textDecoration:'none'}}
												>
													<div className='lp-buy-it-container'>
														<button className='lp-buy-it font-16-white' style={{textDecoration:'none'}}>
															View Product
														</button>
													</div>
												</NavLink>
												<div className='love-button-container'>
													<LoveButton productId={product.prod_id.id}/>
												</div>
											</div>
										</div>
									</>
								))}
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};
export default LovesPage;
