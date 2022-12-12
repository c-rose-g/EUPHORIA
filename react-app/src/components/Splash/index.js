import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { allProducts, productDetails } from '../../store/products';
import CategoriesNavBar from '../CategoriesNavBar';
import Footer from '../Footer/Footer';
import './Splash.css';
function Splash() {
	const dispatch = useDispatch();
	const {productId} = useParams()
	const [firstIdx, setFirstIdx] = useState(0);
	const [nextFirstIdx, setNextFirstIdx] = useState(8);
	const [isLoaded, setIsLoaded] = useState(false);
	const products = useSelector((state) =>
		Object.values(state.products.allProducts)
	);

	useEffect(() => {
		dispatch(allProducts()).then(() => setIsLoaded(true));
		dispatch(productDetails(productId));
	}, [dispatch]);

	return (
		<>
			{isLoaded && (
				<>
					<CategoriesNavBar />
					<div className='splash-page-container'>
						<div className='splash-products-carousel'>


						<div id='splash-products-container-header-chosen-for-you'>
							<div className='font-20' style={{ paddingTop: '5%' , marginLeft:'3%'}}>
								<strong>Chosen For You</strong>
							</div>
						</div>
						<div className='splash-products-div'>

							<button
								id='button-div-left-chosen-for-you'
								onClick={() => setFirstIdx(0)}
							>
								<NavLink to='/'>
									<i className='fa-solid fa-circle-chevron-left' style={{fontSize:'30px'}}></i>
								</NavLink>
							</button>
							<div className='splash-product-card-container'>
								<NavLink
									className='remove-underline'
									to={`/products/${firstIdx + 1}`}
								>
									<div className='upper-half-product-card'>
										<img
											className='splash-product-img'
											src={products[firstIdx].product_photos[0].prod_photo}
											alt='prod 1'
										/>
									</div>
									<div className='lower-half-product-text-div'>
										<b className='font-16'>
											{products[firstIdx].product_brand}
										</b>
										<p className='font-14'>
											{' '}
											{products[firstIdx].product_name}
										</p>
									</div>
								</NavLink>
							</div>
							<div className='splash-product-card-container'>
								<NavLink
									className='remove-underline'
									to={`products/${firstIdx + 2}`}
								>
									<div className='upper-half-product-card'>
										<img
											className='splash-product-img'
											src={products[firstIdx + 1].product_photos[0].prod_photo}
											alt='prod 2'
										/>
									</div>
									<div className='lower-half-product-text-div'>
										<b className='font-16'>
											{products[firstIdx + 1].product_brand}
										</b>
										<p className='font-14'>
											{products[firstIdx + 1].product_name}
										</p>
									</div>
								</NavLink>
							</div>
							<div className='splash-product-card-container'>
								<NavLink
									className='remove-underline'
									to={`/products/${firstIdx + 3}`}
								>
									<div className='upper-half-product-card'>
										<img
											className='splash-product-img'
											src={products[firstIdx + 2].product_photos[0].prod_photo}
											alt='prod 3'
										/>
									</div>
									<div className='lower-half-product-text-div'>
										<b className='font-16'>
											{products[firstIdx + 2].product_brand}
										</b>
										<p className='font-14'>
											{products[firstIdx + 2].product_name}
										</p>
									</div>
								</NavLink>
							</div>
							<div className='splash-product-card-container'>
								<NavLink
									className='remove-underline'
									to={`/products/${firstIdx + 4}`}
								>
									<div className='upper-half-product-card'>
										<img
											src={products[firstIdx + 3].product_photos[0].prod_photo}
											className='splash-product-img'
											alt='prod 4'
										/>
									</div>
									<div className='lower-half-product-text-div'>
										<b className='font-16'>
											{products[firstIdx + 3].product_brand}
										</b>
										<p className='font-14'>
											{products[firstIdx + 3].product_name}
										</p>
									</div>
								</NavLink>
							</div>
							<div className='splash-product-card-container'>
								<NavLink
									className='remove-underline'
									to={`/products/${firstIdx + 5}`}
								>
									<div className='upper-half-product-card'>
										<img
											src={products[firstIdx + 4].product_photos[0].prod_photo}
											className='splash-product-img'
											alt='prod 5'
										/>
									</div>
									<div className='lower-half-product-text-div'>
										<b className='font-16'>
											{products[firstIdx + 4].product_brand}
										</b>
										<p className='font-14'>
											{products[firstIdx + 4].product_name}
										</p>
									</div>
								</NavLink>
							</div>
							<div className='splash-product-card-container'>
								<NavLink
									className='remove-underline'
									to={`/products/${firstIdx + 6}`}
								>
									<div className='upper-half-product-card'>
										<img
											src={products[firstIdx + 5].product_photos[0].prod_photo}
											className='splash-product-img'
											alt='prod 6'
										/>
									</div>
									<div className='lower-half-product-text-div'>
										<b className='font-16'>
											{products[firstIdx + 5].product_brand}
										</b>
										<p className='font-14'>
											{products[firstIdx + 5].product_name}{' '}
										</p>
									</div>
								</NavLink>
							</div>

							<button
								id='button-div-right-chosen-for-you'
								onClick={() => setFirstIdx(6)}
							>
								<i className='fa-solid fa-circle-chevron-right' style={{fontSize:'30px'}}></i>
							</button>
						</div>
						</div>
						<div className='splash-products-carousel'>
							<div id='splash-products-container-header-just-dropped'>
								<div className='font-20' style={{marginLeft:'3%'}}>
									<strong>Just Dropped</strong>
								</div>
							</div>
							<div className='splash-products-div'>
								<button
									id='button-div-left-just-dropped'
									onClick={() => setNextFirstIdx(6)}
								>
									<NavLink to='/'>
										<i className='fa-solid fa-circle-chevron-left' style={{fontSize:'30px'}}></i>
									</NavLink>
								</button>
								<div className='splash-product-card-container'>
									<NavLink
										className='remove-underline'
										to={`/products/${nextFirstIdx + 1}`}
									>
										<div className='upper-half-product-card'>
											<img
												className='splash-product-img'
												src={products[nextFirstIdx].product_photos[0].prod_photo}
												alt='prod 1'
											/>
										</div>
										<div className='lower-half-product-text-div'>
											<b className='font-16'>
												{products[nextFirstIdx].product_brand}
											</b>
											<p className='font-14'>
												{products[nextFirstIdx].product_name}
											</p>
										</div>
									</NavLink>
								</div>
								<div className='splash-product-card-container'>
									<NavLink
										className='remove-underline'
										to={`products/${nextFirstIdx + 2}`}
									>
										<div className='upper-half-product-card'>
											<img
												className='splash-product-img'
												src={
													products[nextFirstIdx + 1].product_photos[0].prod_photo
												}
												alt='prod 2'
											/>
										</div>
										<div className='lower-half-product-text-div'>
											<b className='font-16'>
												{products[nextFirstIdx + 1].product_brand}
											</b>
											<p className='font-14'>
												{products[nextFirstIdx + 1].product_name}
											</p>
										</div>
									</NavLink>
								</div>
								<div className='splash-product-card-container'>
									<NavLink
										className='remove-underline'
										to={`/products/${nextFirstIdx + 3}`}
									>
										<div className='upper-half-product-card'>
											<img
												className='splash-product-img'
												src={
													products[nextFirstIdx + 2].product_photos[0].prod_photo
												}
												alt='prod 3'
											/>
										</div>
										<div className='lower-half-product-text-div'>
											<b className='font-16'>
												{products[nextFirstIdx + 2].product_brand}
											</b>
											<p className='font-14'>
												{products[nextFirstIdx + 2].product_name}
											</p>
										</div>
									</NavLink>
								</div>
								<div className='splash-product-card-container'>
									<NavLink
										className='remove-underline'
										to={`/products/${nextFirstIdx + 4}`}
									>
										<div className='upper-half-product-card'>
											<img
												src={
													products[nextFirstIdx + 3].product_photos[0].prod_photo
												}
												className='splash-product-img'
												alt='prod 4'
											/>
										</div>
										<div className='lower-half-product-text-div'>
											<b className='font-16'>
												{products[nextFirstIdx + 3].product_brand}
											</b>
											<p className='font-14'>
												{products[nextFirstIdx + 3].product_name}
											</p>
										</div>
									</NavLink>
								</div>
								<div className='splash-product-card-container'>
									<NavLink
										className='remove-underline'
										to={`/products/${nextFirstIdx + 5}`}
									>
										<div className='upper-half-product-card'>
											<img
												src={
													products[nextFirstIdx + 4].product_photos[0].prod_photo
												}
												className='splash-product-img'
												alt='prod 5'
											/>
										</div>
										<div className='lower-half-product-text-div'>
											<b className='font-16'>
												{products[nextFirstIdx + 4].product_brand}
											</b>
											<p className='font-14'>
												{products[nextFirstIdx + 4].product_name}
											</p>
										</div>
									</NavLink>
								</div>
								<div className='splash-product-card-container'>
									<NavLink
										className='remove-underline'
										to={`/products/${nextFirstIdx + 6}`}
									>
										<div className='upper-half-product-card'>
											<img
												src={
													products[nextFirstIdx + 5].product_photos[0].prod_photo
												}
												className='splash-product-img'
												alt='prod 6'
											/>
										</div>
										<div className='lower-half-product-text-div'>
											<b className='font-16'>
												{products[nextFirstIdx + 5].product_brand}
											</b>
											<p className='font-14'>
												{products[nextFirstIdx + 5].product_name}{' '}
											</p>
										</div>
									</NavLink>
								</div>
								<button
									id='button-div-right-just-dropped'
									onClick={() => setNextFirstIdx(10)}
								>
									<i className='fa-solid fa-circle-chevron-right' style={{fontSize:'30px'}}></i>
								</button>
							</div>
						</div>

					</div>
					<Footer />
				</>
			)}
		</>
	);
}
export default Splash;
