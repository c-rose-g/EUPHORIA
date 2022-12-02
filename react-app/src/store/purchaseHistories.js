/********************TYPES******************* */
const LOAD_ITEMS = 'history/LOAD'
const ADD_ITEM = 'history/ADD'

/*******************ACTION CREATORS*********** */

const addToPurchaseHistoryAction = (items) =>({
    type:ADD_ITEM,
    items
})

const loadPurchaseHistoryAction = (purchases) => ({
    type:LOAD_ITEMS,
    purchases
})
/*********************THUNKS********************** */

export const addToPurchaseHistory = (payload) => async dispatch =>{
    const {user_id} = payload
    const response = await fetch(`/api/history/${user_id}`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if(response.ok){
        const item = await response.json()
        dispatch(addToPurchaseHistoryAction(item))
        return item
    }
}
// id = purchase history id from the backend route, need to refactor to use actual user id
export const loadPurchaseHistory = (userId) => async dispatch =>{
    const response = await fetch(`/api/history/${userId}`,{
        headers:{'Content-Type': 'application/json'},
    })
    if (response.ok){
        const history = await response.json()
        dispatch(loadPurchaseHistoryAction(history))
        return history
    }
}
/************************REDUCER************************** */

const initialState = {purchaseHistory:{}}
export const purchaseHistoryReducer = (state = initialState, action) =>{
    let newState = {}

    switch (action.type) {
        case ADD_ITEM:
            newState = {...state, purchaseHistory:{}}
            newState.purchaseHistory[action.items.id] = action.items
            return newState

        case LOAD_ITEMS:
            newState ={...state, purchaseHistory:{}}
            newState.purchaseHistory = action.purchases
            return newState
        default:
            return newState
    }
}
