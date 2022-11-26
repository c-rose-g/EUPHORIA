import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { allProducts } from '../../store/products';
import './Splash.css';
function Splash() {
	const dispatch = useDispatch();
	const [firstIdx, setFirstIdx] = useState(0);
	const [isLoaded, setIsLoaded] = useState(false);
	const products = useSelector((state) =>
		Object.values(state.products.allProducts)
	);

	console.log('products use selector', products);

	useEffect(() => {
		setIsLoaded(true);
		dispatch(allProducts());
	}, [dispatch]);

	return (
		<>
			{isLoaded && (
				<div className='splash-page-container'>
					<div className='splash-cat-div'>
						<nav>
							<div className='splash-cat-name'>
								<NavLink className='font-12' to='' activeClassName='active'>
									Makeup
								</NavLink>
							</div>
							<div className='splash-cat-name'>
								<NavLink className='font-12' to='' activeClassName='active'>
									Skincare
								</NavLink>
							</div>
							<div className='splash-cat-name'>
								<NavLink className='font-12' to='' activeClassName='active'>
									Hair
								</NavLink>
							</div>
							<div className='splash-cat-name'>
								<NavLink className='font-12' to='' activeClassName='active'>
									Fragrance
								</NavLink>
							</div>
						</nav>
					</div>
					<div>photo carosel</div>
					<div className='splash-products-container'>
						<div className='font-20'>
							{' '}
							<strong>Chosen For You</strong>
						</div>
					</div>
					<div className='splash-products-div'>
						<button onClick={() => setFirstIdx(0)}>
							<NavLink to='/'>
								<i className='fa-solid fa-circle-chevron-left'></i>
							</NavLink>
						</button>
						<div className='splash-product-cards-container'>
							<div className='upper-half-product-card'>
								<img
									className='splash-product-img'
									src={products[firstIdx].product_photos[0].prod_photo}
									alt='prod 1'
								/>
							</div>
							<div className='lower-half-product-text-div'>
								{products[firstIdx].product_brand}
								{products[firstIdx].product_name}
							</div>
						</div>
						<div className='splash-product-cards-container'>
							<div className='upper-half-product-card'>
								<img
									className='splash-product-img'
									src={products[firstIdx + 1].product_photos[0].prod_photo}
									alt='prod 2'
								/>
							</div>
							<div className='lower-half-product-text-div'>
								{products[firstIdx + 1].product_brand}
								{products[firstIdx + 1].product_name}
							</div>
						</div>
						<div className='splash-product-cards-container'>
							<div className='upper-half-product-card'>
								<img
									className='splash-product-img'
									src={products[firstIdx + 2].product_photos[0].prod_photo}
									alt='prod 3'
								/>
							</div>
							{products[firstIdx + 2].product_brand}
							{products[firstIdx + 2].product_name}
						</div>
						<div className='splash-product-cards-container'>
							<div className='upper-half-product-card'>
								<img
									src={products[firstIdx + 3].product_photos[0].prod_photo}
									className='splash-product-img'
									alt='prod 4'
								/>
							</div>
							<div className='lower-half-product-text-div'>
								{products[firstIdx + 3].product_brand}
								{products[firstIdx + 3].product_name}
							</div>
						</div>
						<button className='button-div' onClick={() => setFirstIdx(4)}>
							<i className='fa-solid fa-circle-chevron-right'></i>
						</button>

						{/* {products.map((product) => {
					return (
						<div className='splash-product-cards-container' key={product.id}>
							<NavLink to={`/products/${product.id}`}>
								<div className='upper-half-product-card'>
									<img className='splash-product-img' src={product.product_photos[0].prod_photo} />
								</div>
								<div className='lower-half-product-text-divs'>
									<div>{product.product_brand}</div>
									<div>{product.product_name}</div>
								</div>
							</NavLink>
						</div>
					);
				})} */}
					</div>
					<div className='font-20'>
						{' '}
						<strong>Just Dropped</strong>
					</div>
				</div>
			)}
		</>
	);
}
export default Splash;
