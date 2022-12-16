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
const loadLoves = () => async dispatch =>{
    const response = await fetch(`/api/loves/:userId`,{
        headers:{'Content-Type': 'application/json'}

    })
}
/************************REDUCER************************** */
