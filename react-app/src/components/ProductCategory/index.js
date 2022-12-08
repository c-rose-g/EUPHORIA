import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { productCategories } from '../../store/products';
import CategoriesNavBar from '../CategoriesNavBar';
import Footer from '../Footer/Footer';
import './ProductCategory.css';
const ProductCategory = () => {
	const dispatch = useDispatch();
	const { prodCategory } = useParams();
	const [loaded, setLoaded] = useState(false);
	const products = useSelector((state) =>
		Object.values(state.products.allProducts)
	);

	useEffect(() => {
		dispatch(productCategories(prodCategory)).then(() => setLoaded(true));
	}, [dispatch]);

	return (
		<>
			{loaded && (
				<>
					<CategoriesNavBar />
					<div className='product-cat-page-container'>
						<div className='font-20 cat-name'> <strong>{prodCategory}</strong></div>
						<div className='product-cat-products-container'>
							{products.map((product) => (
								<div className='products-map' key={product.id}>

									<div className='product-card-container'>
										<NavLink
											className='remove-underline'
											to={`/products/${product.id}`}
										>
											<div className='product-img-card'>
												<img
													className='product-img'
													src={product.product_photos[0].prod_photo}
												/>
											</div>
											<div className='product-text-div'>
												<p className='font-14' style={{ fontWeight: 'bold' }}>
													{product.product_brand}
												</p>
												<p className='font-14 product-name-text'>{product.product_name}</p>
												<p className='font-14' style={{ fontWeight: 'bold' }}>
													${product.product_price}
												</p>
											</div>
										</NavLink>
									</div>
								</div>
							))}
						</div>
					</div>
					<Footer />
				</>
			)}
		</>
	);
};
export default ProductCategory;
