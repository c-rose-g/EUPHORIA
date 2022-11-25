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

export const allProducts = (products) => async dispatch =>{
  const response = await fetch('/api/products', {
    headers:{'Content-Type': 'application/json'}
  })

  if (response.ok){
    const loadAllProducts = await response.json()
    dispatch(loadProductsAction(products))
    return loadAllProducts
  }
}

export const productDetails = (product) => async dispatch =>{
  const response = await fetch(`/api/products/${product.id}`, {
    headers:{'Content-Type': 'application/json'}
  })

  if (response.ok){
    const loadProductDetails = await response.json()
    dispatch(loadProductDetails(loadProductDetails))
    return loadProductDetails
  }
}
/************************REDUCER************************** */
const initialState = {allProducts:{}, oneProduct:{}}

const productReducer = (state = initialState, action) =>{
  let newState = {}

  switch (action.type) {
    case LOAD_PRODUCTS :
      newState = {... state}
      newState. allProducts = {}
      action.allProducts.forEach(product => {
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
