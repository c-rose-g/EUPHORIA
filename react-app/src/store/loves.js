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

    if(response.ok){
        const loves = await response.json()
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
export const deleteLove = (payload) => async dispatch =>{
    const {prod_id} = payload
    const response = await fetch(`/api/loves/${prod_id}`,{
    method:'DELETE',
    headers:{'Content-Type': 'application/json'},
    })
    if(response.ok){
        const love = await response.json()
        dispatch(deleteLovesAction(love))
        return love
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
            return newState

        case ADD_LOVE:
            newState = {...state}
            newState.loves[action.love.id] = action.love
            return newState

        case DELETE_LOVE:
            newState = {...state.loves}
            delete newState[action.love]
            return {loves:{...state.loves}}

        default:
            return state;
    }
}
