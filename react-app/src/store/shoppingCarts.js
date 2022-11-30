/********************TYPES******************* */
const LOAD_ALL_SHOPPING_CART = 'shopping_carts/LOAD_CARTS'
const LOAD_USER_SHOPPING_CART = 'shopping_carts/LOAD_USER_CART'
const LOAD_ALL_ITEMS = 'shopping_carts/LOAD_ALL_ITEMS'
const ADD_TO_SHOPPING_CART = 'shoppping_cart/ADD_TO_CART'
const DECREMENT_ITEM = 'shopping_cart/DECREMENT_ITEM'

/*******************ACTION CREATORS*********** */
const loadAllShoppingCartsAction = (shoppingCarts) =>({
  type:LOAD_ALL_SHOPPING_CART,
  shoppingCarts
})

const loadUserShoppingCartAction = (shoppingCart) =>({
  type:LOAD_USER_SHOPPING_CART,
  shoppingCart
})

const loadShoppingCartItemsAction = (items) =>({
  type: LOAD_ALL_ITEMS,
  items
})

const addToShoppingCartAction = (item) => ({
  type: ADD_TO_SHOPPING_CART,
  item
})

const decrementItemAction = (item) => ({
  type: DECREMENT_ITEM,
  item
})

/*********************THUNKS********************** */
export const loadShoppingCarts = () => async dispatch => {
  const response = await fetch(`/api/basket/all`, {
    headers:{'Content-Type': 'application/json'}
  })

  if(response.ok){
    const carts = await response.json()
    dispatch(loadAllShoppingCartsAction(carts))
    return carts
  }
}

export const loadUserCart = (user_id) => async dispatch =>{
  const response = await fetch(`/api/backet/${user_id}`,{
    headers:{'Content-Type': 'application/json'}
  })

  if(response.ok){
    const cart = await response.json()
    dispatch(loadUserShoppingCartAction(cart))
    return cart
  }
}

// export const 
/************************REDUCER************************** */
const initialState = {baskets:{}, basket:{}}
export const basketReducer = (state = initialState, action) =>{
  let newState = {}
  switch (action.type) {
    case LOAD_ALL_SHOPPING_CART:
      newState = {...state}
      newState.basket = {}
      action.shoppingCarts.retrieve_user_carts.forEach(cart => {
        action.baskets[cart.id] = cart
      });
      return newState

    case LOAD_USER_SHOPPING_CART:
      newState = {...state }
      action.shoppingCart.basket[action.cart.id] = action.shoppingCart
      return newState

    default:
      return state
  }
}
