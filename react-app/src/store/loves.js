/********************TYPES******************* */
const LOAD_LOVES = 'loves/LOADLOVES'
const ADD_LOVE = 'loves/ADDLOVE'
const DELETE_LOVE = 'loves/DELETELOVE'
/*******************ACTION CREATORS*********** */

const loadLovesAction = (loves) =>({
    type:LOAD_LOVES,
    loves
})

const addLovesAction = (love) =>({
    type:ADD_LOVE,
    love
})

const deleteLovesAction = (love) => ({
    type:DELETE_LOVE,
    love
})
/*********************THUNKS********************** */
export const loadLoves = (userId) => async dispatch =>{
    const response = await fetch(`/api/loves/${userId}`,{
        headers:{'Content-Type': 'application/json'}

    })
    console.log('response in load loves', response)

    if(response.ok){
        const loves = await response.json()
        console.log('loves inside load loves thunk', loves)
        dispatch(loadLovesAction(loves))
        return loves
    }
}
export const addLove = (payload) => async dispatch =>{
    const {prod_id} = payload
    const response = await fetch(`/api/loves/${prod_id}`,{
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
    })

    if (response.ok){
        const love = await response.json()
        dispatch(addLovesAction(love))
        return love
    }
}
export const deleteLove = (productId) => async dispatch =>{
    // const {prod_id} = payload
    console.log('delete love before response',productId)
    const response = await fetch(`/api/loves/${productId}`,{
    method:'DELETE',
    headers:{'Content-Type': 'application/json'},
    })
    console.log('delete love after response', response)

    if(response.ok){
        const love = await response.json()
        console.log('response in delete love', love)
        dispatch(deleteLovesAction(love))
        return
    }
}
/************************REDUCER************************** */
const initialState = {loves:{}}
export const lovesReducer = (state = initialState, action) =>{
    let newState;
    switch (action.type) {
        case LOAD_LOVES:
            // newState = {loves:{... state.loves}}
            newState = {...state}
            action.loves.loves.forEach(love => {
                newState.loves[love.id] = love
            });
            console.log('newState in load loves', newState)
            console.log('action in load love', action)
            return newState

        case ADD_LOVE:
            newState = {...state}
            newState.loves[action.love.id] = action.love
            return newState

        case DELETE_LOVE:
            newState = {...state}
            console.log('action in deleted love', action)

            delete newState.loves[action.love.id]
            console.log('newstate in deleted love', newState)
            return {loves:{...state.loves}}

        default:
            return state;
    }
}
