import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productDetails } from "../../store/products";
import { loadReviews } from "../../store/review";
const ProductDetails = () =>{
  const dispatch = useDispatch()
  const prodReviews = useSelector(state => state.reviews)
  console.log('this is product reviews >>>>>', prodReviews)

  useEffect(() =>{
    dispatch(productDetails(1))
    dispatch(loadReviews(1))
  },[dispatch])
  return(
    <div>this is product details</div>
  )
}

export default ProductDetails;
