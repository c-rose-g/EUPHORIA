

/********************TYPES******************************* */
// not logged in
const LOAD_REVIEWS = 'reviews/LOAD'
// logged in
const LOAD_USERS_REVIEWS = 'reviews/LOAD_USERS_REVIEWS'
const CREATE_REVIEW = 'reviews/CREATE'
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

const loadUsersReviewsAction = (user) =>({
  type:LOAD_USERS_REVIEWS,
  user
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
  const {product_id, review_msg} = payload
  console.log('payload in thunk >>>>', payload)
  const response = await fetch(`/api/reviews/${product_id}/new`, {
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  if(response.ok){
    const newReview = await response.json()
    console.log('new review response in thunk >>>>', newReview)
    dispatch(createReviewAction(newReview))
    return newReview
  }
}
// am I using the right url?
export const loadReviews = (prod_id) => async dispatch => {
  // const {productId, review_msg} = payload
  console.log('is this the right prod id?' , prod_id)
  const response = await fetch(`/api/reviews/${prod_id}`,{
    headers:{
      'Content-Type': 'application/json',
    }
  })
  if (response.ok){
    const review = await response.json()
    dispatch(loadReviewsAction(review))
    return review
  }
}

export const loadUserReviews = (prod_id) => async dispatch =>{
  const response = await fetch(`/api/reviews/${prod_id}/users`,{
    headers:{
      'Content-Type': 'application/json',
    }
  })

  if(response.ok){
    const reviews = await response.json()
    dispatch(loadUsersReviewsAction(reviews))
    return reviews
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
const initialState = {reviews:{}, userReviews:{}}

export const reviewsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CREATE_REVIEW:
      newState = {... state, reviews:{}}
      console.log('action in reviews reducer >>>', action)

      newState.reviews[action.newReview.id] = action.newReview
      // newState = {...state, [action.newReview.id]:action.newReview}
      return newState

    case LOAD_USERS_REVIEWS:{
      newState= {...state, userReviews:{}}
      action.user.retrieve_user_reviews.forEach(user =>{
        // console.log('user in reviews reducer >>>', user)
        newState.userReviews[user.user_id.id] = user.user_id
      })
      return newState
    }

    case LOAD_REVIEWS:{
      newState = {...state, reviews:{}}
      action.reviews.retrieve_prod_reviews.forEach(review => {
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
