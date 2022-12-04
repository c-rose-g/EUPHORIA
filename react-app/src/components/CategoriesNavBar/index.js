import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from "react-router-dom";
import { productCategories } from "../../store/products";
import './CategoriesNavBar.css'

const CategoriesNavBar = ()=>{
  const {prodCategory} = useParams()
  console.log('cat name in categories nav bar', prodCategory)
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false)
	// const [isLoaded, setIsLoaded] = useState(false);
  // const products = useSelector(state => Object.values(state.products.allProducts))

  // const productSet = new Set()
  // products.forEach(product => {
  //   productSet.add(product.product_category)
  // })


  const categoriesNames = ['makeup','skincare','hair','fragrance']
  // console.log('product set >>>>', categoriesNames)


  useEffect(() =>{
    // if(cat_name){
      dispatch(productCategories(prodCategory))
      .then(() => setLoaded(true))
    // }
  },[dispatch, prodCategory])

  return(
    <>

      {loaded && (<div className="categories-navbar-container">
        <div className="categories-map-container">
        {categoriesNames.map((name) =>{
          return(
            <div className="category-name" key={name}>
            <NavLink className='remove-underline' style={{color:'white'}} to ={`/products/categories/${name}`}>
            {name}
            </NavLink>
            </div>
          )
        })}
        </div>
      </div>
      )}

    </>
  )
}

export default CategoriesNavBar
