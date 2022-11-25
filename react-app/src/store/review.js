import { loadReviewsBySpotThunk } from "../../../../Airbnb-API/Bnbaire/frontend/src/store/reviews"

/********************TYPES******************************* */
const CREATE_REVIEW = 'reviews/CREATE'
// not logged in
const LOAD_REVIEWS = 'reviews/LOAD'
// logged in
const UPDATE_REVIEW = 'reviews/UPDATE'
const DELETE_REVIEW = 'reviews/DELETE'


/*******************ACTION CREATORS************************* */
const createReviewAction = (newReview) =>({
  type: CREATE_REVIEW,
  newReview
})

const loadReviewsAction = (reviews) =>({
  type: LOAD_REVIEWS,
  reviews
})

const updateReviewAction = (review) =>({
  type:UPDATE_REVIEW,
  review
})

const deleteReviewAction = (review) =>({
  type:DELETE_REVIEW,
  review
})
/*********************THUNKS******************************* */
export const createReview = (payload) => async dispatch =>{
  const {prodId, review_msg} = payload
  const response = await fetch(`/api/`, {
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({review_msg})
  })

  if(response.ok){
    const newReview = await response.json()
    dispatch(createReviewAction(newReview))
    return newReview
  }
}
// am I using the right url?
export const loadReviews = (reviews) => async dispatch => {
  // const {productId, review_msg} = payload
  const response = await fetch(`/api/reviews/${reviews.prodId}`)
  if (response.ok){
    const review = await response.json()
    dispatch(loadReviewsAction(review))
    return review
  }
}

export const updateReview = (review) => async dispatch =>{
  const {id, review_msg} = review
  const response = await fetch(`/api/reviews/${id}`, {
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      review_msg
    })
  })

  if(response.ok){
    const updatedReview = await response.json()
    dispatch(updateReviewAction(updatedReview))
    return updatedReview
  }
}

export const deleteReview = review => async dispatch => {
  const {id, review_msg} = review
  const response = await fetch(`/api/reviews/${id}`, {
    method:'DELETE'
  })
  if (response.ok){
    const deletedReview = await response.json()
    dispatch(deleteReviewAction(deletedReview))
    return deletedReview
  }
}
/************************REDUCER************************** */
const initialState = {reviews:{}}

const reviewReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CREATE_REVIEW:
      newState = {...state, [action.newReview.id]:action.newReview}
      return newState

    case LOAD_REVIEWS:{
      newState = {...state, reviews:{}}
      action.reviews.forEach(review => {
        newState.reviews[review.id] = review
      });
      return newState
    }
    case UPDATE_REVIEW:{
      newState = {...state, [action.review.id]:action.review}
      return newState
    }
    case DELETE_REVIEW:{
      newState = {...state}
      delete newState[action.review.id]
      return newState
    }
    default:
      return state
  }
}
