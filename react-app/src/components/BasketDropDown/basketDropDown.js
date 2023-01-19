import React, { useEffect, useState } from 'react';
import {
	loadUserCart,
	increaseItem,
	decrementItem,
} from '../../store/shoppingCarts';
import { addToPurchaseHistory } from '../../store/purchaseHistories';
import { allProducts } from '../../store/products';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import './basketDropDown.css';

const BasketDropDown = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	// obj of userbasket
	const userBasket = useSelector((state) => state.basket.userBasket);

	const products = useSelector((state) => state.products.allProducts);

	// array of user items
	// const items = userBasket.cart_prod ? Object.values(userBasket.cart_prod) : [];

  useEffect(() => {
    (async () => {
      await dispatch(allProducts())
      await dispatch(loadUserCart(userId))
      
    })
  })
};

export default BasketDropDown;
