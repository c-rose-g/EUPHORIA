/********************TYPES******************* */
// basket
const LOAD_ALL_SHOPPING_CART = 'shopping_carts/LOAD_CARTS'
const LOAD_USER_SHOPPING_CART = 'shopping_carts/LOAD_USER_CART'
// items
const LOAD_ALL_ITEMS = 'shopping_carts/LOAD_ALL_ITEMS'
const ADD_TO_SHOPPING_CART = 'shopping_cart/ADD_TO_CART'
const INCREASE_ITEM = 'shopping_cart/INCREASE_ITEM'
const DECREMENT_ITEM = 'shopping_cart/DECREMENT_ITEM'

/*******************ACTION CREATORS*********** */
// from shopping cart / basket
const loadAllShoppingCartsAction = (shoppingCarts) =>({
  type:LOAD_ALL_SHOPPING_CART,
  shoppingCarts
})

const loadUserShoppingCartAction = (shoppingCart) =>({
  type:LOAD_USER_SHOPPING_CART,
  shoppingCart
})

// from shopping cart item / items
const loadItemsAction = (items) =>({
  type: LOAD_ALL_ITEMS,
  items
})

const addToCartAction = (item) => ({
  type: ADD_TO_SHOPPING_CART,
  item
})

const increaseItemAction = (item) =>({
  type: INCREASE_ITEM,
  item
})
const decrementItemAction = (itemId, item) => ({
  type: DECREMENT_ITEM,
  item,
  itemId,
})

/*********************THUNKS********************** */
// shopping cart item - CREATE
export const addToCart = (payload) => async dispatch =>{
  const {productId} = payload

  const response = await fetch(`/api/items/${productId}`,{
    method:'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })


  if(response.ok){
    const item = await response.json()
    dispatch(addToCartAction(item))
    return item
  }
}

// shopping cart -READ
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
// shopping cart -READ
export const loadUserCart = (userId) => async dispatch =>{
  const response = await fetch(`/api/basket/${userId}`,{
    headers:{'Content-Type': 'application/json'}
  })

  if(response.ok){
    const cart = await response.json()
    dispatch(loadUserShoppingCartAction(cart))
    return cart
  }
}
// shopping cart items - READ
export const loadItems = () => async dispatch =>{
  const response = await fetch(`/api/items/all`, {
    headers:{'Content-Type': 'application/json'}
  })

  if(response.ok){
    const items = await response.json()
    dispatch(loadItemsAction(items))
    return items
  }
}

export const increaseItem = (payload) => async dispatch =>{

  const {productId} = payload
  const response = await fetch(`/api/items/${productId}`,{
    method:'PUT',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })

  if (response.ok){
    const item = await response.json()
    dispatch(increaseItemAction(item))
    return item
  }
}

export const decrementItem = (itemId) => async dispatch =>{

  const response = await fetch(`/api/items/${itemId}`,{
    method:'DELETE',
    headers:{
      'Content-Type': 'application/json',
    },
  })

  if (response.ok){
    const item = await response.json()
    dispatch(decrementItemAction(itemId,item))
    return item
  }
}

/************************REDUCER************************** */
const initialState = {baskets:{}, userBasket:{}}
export const basketReducer = (state = initialState, action) =>{
  let newState = {}
  switch (action.type) {
    case LOAD_ALL_SHOPPING_CART:
      newState = {...state}
      newState.baskets = {}
      action.shoppingCarts.retrieve_users_carts.forEach(cart => {
        action.baskets[cart.id] = cart
      });
      return newState

    case LOAD_USER_SHOPPING_CART:
      newState = {...state, userBasket:{} }

      newState.userBasket = action.shoppingCart

      return newState

    // case LOAD_ALL_ITEMS:
    //   newState = { ...state}

    case ADD_TO_SHOPPING_CART:
      newState = {...state, userBasket:{}}
      // console.log(action,'action in shopping cart reducer')
      newState.userBasket[action.item.id] = action.item

      return newState

    case INCREASE_ITEM:

      return {baskets:{...state.baskets}, userBasket:{...state.userBasket, cart_prod:{...state.userBasket.cart_prod, [action.item.id]:action.item}}}

    case DECREMENT_ITEM:

      if(state.userBasket.cart_prod[action.itemId].prod_quantity > 1){
        return {baskets:{...state.baskets}, userBasket:{...state.userBasket, cart_prod:{...state.userBasket.cart_prod, [action.item.id]:action.item}}}
      } else{
        newState = {...state.userBasket.cart_prod}
        delete newState[action.itemId]
        return {baskets:{...state.baskets}, userBasket:{...state.userBasket, cart_prod:newState}}
      }


    default:
      return state
  }
}
