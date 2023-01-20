import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CategoriesNavBar from '../CategoriesNavBar';
const LovesPage = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.session.user);
	const userloves = useSelector((state) => Object.values(state.loves.loves));
	console.log('user loves', userloves);
	return (
		<>
			<CategoriesNavBar />
			<div className='purchase-history-page-container'>
				<div className='basket-title-container'>
					<div className='basket-title font-24'>
						<strong>Loves</strong>
					</div>
				</div>
				<div className='purchase-history-rows-wrapper'>
					<div className='ph-left-column'>
						{userloves.map((product) => (
							<>
                            <div className='ph-items-rows'>

								<div className='ph-item-left-column' key={product.id}>
									<div className='ph-item-img-container'>
										<img
											className='ph-item-img'
											src={product.prod_id.product_photos[0].prod_photo}
										></img>
									</div>
								</div>
								<div className='ph-item-mid-column'>
                                <div className='brand-price-row'>

									<div className='item-brand font-16'>
										{product.prod_id.product_brand}
									</div>
									<div className='item-price font-16'>
										{product.prod_id.product_price}
									</div>
                                </div>

									<div className='purchase-history-item-row font-14'>
										{product.prod_id.product_name}
									</div>

									<div className='loves-add-product'>add to basket button</div>
								</div>
                            </div>
							</>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export default LovesPage;
