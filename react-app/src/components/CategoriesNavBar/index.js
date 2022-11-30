import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from "react-router-dom";
import { productCategories } from "../../store/products";
import './CategoriesNavBar.css'

const CategoriesNavBar = ()=>{
  const {cat_name} = useParams()
  const dispatch = useDispatch()
	// const [isLoaded, setIsLoaded] = useState(false);
  // const products = useSelector(state => Object.values(state.products.allProducts))

  // const productSet = new Set()
  // products.forEach(product => {
  //   productSet.add(product.product_category)
  // })

  const categoriesNames = ['makeup','skincare','hair','fragrance']
  // console.log('product set >>>>', categoriesNames)


  useEffect(() =>{
    if(cat_name){
      dispatch(productCategories(cat_name))
    }
  },[dispatch])

  return(
    <>

      <div className="categories-navbar-container">
        <div className="categories-map-container">
        {categoriesNames.map((name) =>{
          return(
            <div className="category-name font-12" key={name}>
            <NavLink className='remove-underline' to ={`/products/categories/${name}`}>
            {name}
            </NavLink>
            </div>
          )
        })}
        </div>
      </div>

    </>
  )
}

export default CategoriesNavBar
