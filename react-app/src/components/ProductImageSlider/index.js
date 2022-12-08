import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productDetails } from '../../store/products';
// import ProductDetails from '../ProductDetails';

import './ProductImageSlider.css';

const ProductImageSlider = () => {
	const dispatch = useDispatch();
	const [currentImage, setCurrentImage] = useState(0);
	const [loaded, isLoaded] = useState(false);
	const { productId } = useParams();
	const oneProd = useSelector((state) => state.products.oneProduct);
	const prodImages = oneProd.product_photos;
	const length = prodImages.length;

	const nextImg = () => {
		setCurrentImage(currentImage === length - 1 ? 0 : currentImage - 1);
	};

	const prevImg = () => {
		setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1);
	};
	useEffect(
		() => dispatch(productDetails(productId)).then(() => isLoaded(true)),
		[dispatch]
	);
	return (
		<>
			{loaded && (
				<section className='slider-container'>
					{length && length > 1 ? (
						<>
							<div className='' onClick={nextImg}>
								<i className='fa-solid fa-chevron-left slider-left-arrow'></i>
							</div>
							<div className='' onClick={prevImg}>
								<i className='fa-solid fa-chevron-right slider-right-arrow'></i>
							</div>
						</>
					) : null}
					<div className='slider-images-container'>
						{prodImages.map((slide, i) => {
							return (
								<div
									className={i === currentImage ? 'slide active' : 'slide'}
									key={i}
								>
									<img
										className='slider-img'
										src={slide.prod_photo}
										alt='product-img'
									></img>
								</div>
							);
						})}
					</div>
				</section>
			)}
		</>
	);
};
export default ProductImageSlider;
