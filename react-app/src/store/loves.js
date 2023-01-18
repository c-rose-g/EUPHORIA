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
    console.log('thunk hit in load loves')
    const response = await fetch(`/api/loves/${userId}`,{
        headers:{'Content-Type': 'application/json'}

    })
    // console.log('response in load loves', response)

    if(response.ok){
        const loves = await response.json()
        console.log('loves inside load loves thunk', loves)
        dispatch(loadLovesAction(loves))
        return loves
    }
}
export const addLove = (payload) => async dispatch =>{
    const {prod_id} = payload
    console.log('add love thunk BEING HIT')
    const response = await fetch(`/api/loves/${prod_id}`,{
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
    })
    console.log('add love is hit before response', response)
    if (response.ok){
        const love = await response.json()
        dispatch(addLovesAction(love))
        // dispatch(loadLoves(love.user_id.id))
        console.log('love in the add love thunk response', love)
        return love
    }
}
export const deleteLove = (productId) => async dispatch =>{
    // const {prod_id} = payload
    // console.log('delete love before response',productId)
    const response = await fetch(`/api/loves/${productId}`,{
    method:'DELETE',
    headers:{'Content-Type': 'application/json'},
    })
    console.log('delete love after response', response)

    if(response.ok){
        const love = await response.json()
        // console.log('response in delete love', love)
        dispatch(deleteLovesAction(love))
        // dispatch(loadLoves(user.id))
        return
    }
}
/************************REDUCER************************** */
const initialState = {loves:{}}
// either start w/ empty inital state or just spread loves in delete_love
export const lovesReducer = (state = initialState, action) =>{
    let newState;
    let liked;
    switch (action.type) {
        case LOAD_LOVES:
            // newState = {loves:{... state.loves}}
            // delete love reducer works, load loves isn't updating with delete love
            newState = {...state}
            action.loves.loves.forEach(love => {
                newState.loves[love.id] = love
                // console.log('love inside for each', love)
            });
            // console.log('action in load love', action.loves)
            // console.log('newState in load loves', newState)
            // newState.loves.loves = action.loves
            return newState

        case ADD_LOVE:
            newState = {...state}
            // console.log('this is the liked prod', action)
            newState.loves[action.love.id] = action.love
            return newState

        case DELETE_LOVE:
            newState = {loves:{...state.loves}}
            // console.log('action in deleted love', action)
            delete newState.loves[action.love.love]
            // console.log('newstate in deleted love', newState)
            // return {loves:{...state}}
            return newState

        default:
            return state;
    }
}
