/********************TYPES******************* */
const LOAD_PRODUCTS = 'products/LOADALL'
const LOAD_PRODUCT_DETAILS = 'products/LOADPRODUCTDETAILS'

/*******************ACTION CREATORS*********** */
const loadProductsAction = (products) =>({
  type:LOAD_PRODUCTS,
  products
})

const loadProductDetailsAction = (product) =>({
  type: LOAD_PRODUCT_DETAILS,
  product
})
/*********************THUNKS********************** */

export const allProducts = () => async dispatch =>{
  // console.log('all products was hit')
  const response = await fetch('/api/products/allProducts', {
    headers:{'Content-Type': 'application/json'}
  })

  if (response.ok){
    const loadAllProducts = await response.json()
    // console.log('load all products', loadAllProducts)
    dispatch(loadProductsAction(loadAllProducts))
    return loadAllProducts
  }
}

export const productDetails = (product) => async dispatch =>{
  const response = await fetch(`/api/products/${product.id}`, {
    headers:{'Content-Type': 'application/json'}
  })

  if (response.ok){
    const loadProductDetails = await response.json()
    dispatch(loadProductDetailsAction(loadProductDetails))
    return loadProductDetails
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
      // console.log('action in load products', action)

      action.products.retrieve_products.forEach(product => {
        newState.allProducts[product.id] = product
      });
      return newState
    case LOAD_PRODUCT_DETAILS:
      newState.allProducts = {...state.allProducts, [action.oneProduct.id]:action.oneProduct}
      return newState;
    default:
      return state
  }
}
