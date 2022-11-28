import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { productCategories } from '../../store/products'

const ProductCategory = () =>{
  const dispatch = useDispatch()
  const {prod_category} = useParams()
  useEffect(() => {
    dispatch(productCategories(prod_category))
  })
  return(
    <div>this is the product category page</div>
  )
}
export default ProductCategory
