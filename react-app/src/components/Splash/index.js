import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { allProducts, productDetails } from '../../store/products';
import CategoriesNavBar from '../CategoriesNavBar';
import './Splash.css';
function Splash() {
	const dispatch = useDispatch();
	// const {prodId} = useParams()
	const [firstIdx, setFirstIdx] = useState(0);
	const [nextFirstIdx, setNextFirstIdx] = useState(8)
	console.log('first index change', firstIdx);
	const [isLoaded, setIsLoaded] = useState(false);
	const products = useSelector((state) =>
		Object.values(state.products.allProducts)
	);

	// console.log('products use selector', products);

	useEffect(() => {
		// setIsLoaded(true);
		dispatch(allProducts()).then(() => setIsLoaded(true));
		dispatch(productDetails(1));
	}, [dispatch]);

							/* {products.map((product, index) => {
							index <= 8 ?
					(
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
					):null
				})} */
	return (
		<>
			{isLoaded && (
				<div>
					<CategoriesNavBar />
					<div className='splash-page-container'>
						<div>photo carosel</div>
						<div className='splash-products-container'>
							<div className='font-20'><strong>Chosen For You</strong></div>
						</div>
						<div className='splash-products-div'>
							<button onClick={() => setFirstIdx(0)}>
								<NavLink to='/'><i className='fa-solid fa-circle-chevron-left'></i></NavLink>
							</button>
							<div className='splash-product-cards-container'>
								<NavLink className='remove-underline' to={`/products/${firstIdx + 1}`}>
									<div className='upper-half-product-card'>
										<img className='splash-product-img' src={products[firstIdx].product_photos[0].prod_photo} alt='prod 1' />
									</div>
									<div className='lower-half-product-text-div'>
										{products[firstIdx].product_brand} <p /> {products[firstIdx].product_name}
									</div>
								</NavLink>
							</div>
							<div className='splash-product-cards-container'>
								<NavLink className='remove-underline' to={`products/${firstIdx + 2}`} >
									<div className='upper-half-product-card'>
										<img className='splash-product-img' src={products[firstIdx + 1].product_photos[0].prod_photo} alt='prod 2' />
									</div>
									<div className='lower-half-product-text-div'>
										{products[firstIdx + 1].product_brand} <p /> {products[firstIdx + 1].product_name}
									</div>
								</NavLink>
							</div>
							<div className='splash-product-cards-container'>
								<NavLink className='remove-underline' to={`/products/${firstIdx + 3}`} >
									<div className='upper-half-product-card'>
										<img className='splash-product-img' src={products[firstIdx + 2].product_photos[0].prod_photo} alt='prod 3' />
									</div>
									{products[firstIdx + 2].product_brand} <p /> {products[firstIdx + 2].product_name}
								</NavLink>
							</div>
							<div className='splash-product-cards-container'>
								<NavLink className='remove-underline' to={`/products/${firstIdx + 4}`} >
									<div className='upper-half-product-card'>
										<img src={products[firstIdx + 3].product_photos[0].prod_photo} className='splash-product-img' alt='prod 4' />
									</div>
									<div className='lower-half-product-text-div'> {products[firstIdx + 3].product_brand} <p /> {products[firstIdx + 3].product_name}
									</div>
								</NavLink>
							</div>
							<button className='button-div' onClick={() => setFirstIdx(4)}>
								<i className='fa-solid fa-circle-chevron-right'></i>
							</button>

						</div>
							<div className='splash-products-container'>
								<div className='font-20'><strong>Just Dropped</strong></div>
							</div>
							<div className='splash-products-div'>
							<button onClick={() => setNextFirstIdx(5)}>
								<NavLink to='/'><i className='fa-solid fa-circle-chevron-left'></i></NavLink>
							</button>
							<div className='splash-product-cards-container'>
								<NavLink className='remove-underline' to={`/products/${nextFirstIdx + 1}`}>
									<div className='upper-half-product-card'>
										<img className='splash-product-img' src={products[nextFirstIdx].product_photos[0].prod_photo} alt='prod 1' />
									</div>
									<div className='lower-half-product-text-div'>
										{products[nextFirstIdx].product_brand} <p /> {products[nextFirstIdx].product_name}
									</div>
								</NavLink>
							</div>
							<div className='splash-product-cards-container'>
								<NavLink className='remove-underline' to={`products/${nextFirstIdx + 2}`} >
									<div className='upper-half-product-card'>
										<img className='splash-product-img' src={products[nextFirstIdx + 1].product_photos[0].prod_photo} alt='prod 2' />
									</div>
									<div className='lower-half-product-text-div'>
										{products[nextFirstIdx + 1].product_brand} <p /> {products[nextFirstIdx + 1].product_name}
									</div>
								</NavLink>
							</div>
							<div className='splash-product-cards-container'>
								<NavLink className='remove-underline' to={`/products/${nextFirstIdx + 3}`} >
									<div className='upper-half-product-card'>
										<img className='splash-product-img' src={products[nextFirstIdx + 2].product_photos[0].prod_photo} alt='prod 3' />
									</div>
									{products[nextFirstIdx + 2].product_brand} <p /> {products[nextFirstIdx + 2].product_name}
								</NavLink>
							</div>
							<div className='splash-product-cards-container'>
								<NavLink className='remove-underline' to={`/products/${nextFirstIdx + 4}`} >
									<div className='upper-half-product-card'>
										<img src={products[nextFirstIdx + 3].product_photos[0].prod_photo} className='splash-product-img' alt='prod 4' />
									</div>
									<div className='lower-half-product-text-div'> {products[nextFirstIdx + 3].product_brand} <p /> {products[nextFirstIdx + 3].product_name}
									</div>
								</NavLink>
							</div>
							<button className='' onClick={() => setNextFirstIdx(9)}>
								<i className='fa-solid fa-circle-chevron-right'></i>
							</button>

							</div>

					</div>
				</div>
			)}
		</>
	);
}
export default Splash;
