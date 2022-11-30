/********************TYPES******************* */
const LOAD_ITEMS = 'shoppingCartItems/LOAD_ITEMS'
const LOAD_ONE_ITEM = 'shoppingCartItems/LOAD_ONE_ITEM'
const ADD_ITEM = 'shoppingCartItems/ADD'
const DELETE_ITEM = 'shoppingCartItems/DELETE'

/*******************ACTION CREATORS*********** */
const loadItemsAction = (items) =>({
  type:LOAD_ITEMS,
  items
})

// const loadOneItemAction
/*********************THUNKS********************** */


/************************REDUCER************************** */
