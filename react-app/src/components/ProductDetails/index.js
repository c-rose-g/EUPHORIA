import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productDetails } from "../../store/products";
const ProductDetails = () =>{
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(productDetails(1))
  },[dispatch])
  return(
    <div>this is product details</div>
  )
}

export default ProductDetails;
