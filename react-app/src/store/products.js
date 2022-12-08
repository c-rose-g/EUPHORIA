/********************TYPES******************* */
const LOAD_PRODUCTS = 'products/LOADALL'
const LOAD_PRODUCT_DETAILS = 'products/LOADPRODUCTDETAILS'
const LOAD_PRODUCT_CATEGORIES = 'products/LOADPRODUCTCATEGORIES'
/*******************ACTION CREATORS*********** */
const loadProductsAction = (products) =>({
  type:LOAD_PRODUCTS,
  products
})

const loadProductDetailsAction = (product) =>({
  type: LOAD_PRODUCT_DETAILS,
  product
})

const loadProductCategoriesAction = (category) =>({
  type:LOAD_PRODUCT_CATEGORIES,
  category
})
/*********************THUNKS********************** */

export const allProducts = () => async dispatch =>{
  const response = await fetch('/api/products/allProducts', {
    headers:{'Content-Type': 'application/json'}
  })

  if (response.ok){
    const loadAllProducts = await response.json()
    dispatch(loadProductsAction(loadAllProducts))
    return loadAllProducts
  }
}

export const productDetails = (prod_id) => async dispatch =>{
  const response = await fetch(`/api/products/${prod_id}`, {
    headers:{'Content-Type': 'application/json'}
  })
  if (response.ok){
    const loadProductDetails = await response.json()
    dispatch(loadProductDetailsAction(loadProductDetails))
    return loadProductDetails
  }
}

export const productCategories = (prodCategory) => async dispatch =>{
  console.log('product category in products thunk >>>>>>>>>', prodCategory)
  const response = await fetch(`/api/products/categories/${prodCategory}`, {
    headers:{'Content-Type': 'application/json'}
  })

  if (response.ok){
    const prodCategories = await response.json()
    dispatch(loadProductCategoriesAction(prodCategories))
    return prodCategories
  }
}
/************************REDUCER************************** */
const initialState = {allProducts:{}, oneProduct:{}}

export const productsReducer = (state = initialState, action) =>{
  let newState = {}

  switch (action.type) {
    case LOAD_PRODUCTS :
      newState = {... state}
      newState.allProducts = {}

      action.products.retrieve_products.forEach(product => {
        newState.allProducts[product.id] = product
      });
      return newState
    case LOAD_PRODUCT_DETAILS:

      newState = {...state}
      newState.oneProduct = {...action.product}

      return newState;
    case LOAD_PRODUCT_CATEGORIES:

      newState = {... state}
      newState.allProducts = {}

      action.category.retrieve_categories.forEach(cat => {
        newState.allProducts[cat.id] = cat
      })
      return newState
    default:
      return state
  }
}
