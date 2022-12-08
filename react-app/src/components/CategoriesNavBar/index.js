import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { productCategories } from '../../store/products';
import './CategoriesNavBar.css';

const CategoriesNavBar = () => {
	const { prodCategory } = useParams();
	const dispatch = useDispatch();
	const [loaded, setLoaded] = useState(false);

	const categoriesNames = ['Makeup', 'Skincare', 'Hair', 'Fragrance'];

	useEffect(() => {
		dispatch(productCategories(prodCategory)).then(() => setLoaded(true));
	}, [dispatch, prodCategory]);

	return (
		<>
			{loaded && (
				<div className='categories-navbar-container'>
					<div className='categories-map-container'>
						{categoriesNames.map((name) => {
							return (
								<div className='category-name' key={name}>
									<NavLink
										className='remove-underline'
										style={{ color: 'white' }}
										to={`/products/categories/${name}`}
									>
										{name}
									</NavLink>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</>
	);
};

export default CategoriesNavBar;
