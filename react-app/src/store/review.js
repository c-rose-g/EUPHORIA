

/********************TYPES******************************* */
// not logged in
const LOAD_REVIEWS = 'reviews/LOAD'
// logged in
const LOAD_ONE_REVIEW = 'reviews/LOAD_ONE_REVIEW'
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

const loadOneReviewAction = (review) =>({
  type: LOAD_ONE_REVIEW,
  review
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

  const response = await fetch(`/api/reviews/${product_id}/new`, {
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })

  if(response.ok){
    const newReview = await response.json()

    dispatch(createReviewAction(newReview))
    return newReview
  }
}

export const loadReviews = (prod_id) => async dispatch => {

  const response = await fetch(`/api/products/${prod_id}/reviews`,{
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

export const loadOneReview = (reviewId) => async dispatch =>{

  const response = await fetch(`/api/reviews/${reviewId}`,{
    headers:{
      'Content-Type': 'application/json',
    }
  })


  if(response.ok){
    const oneReview = await response.json()
    console.log(' one Review if response ok>>>>>>', response)
    dispatch(loadOneReviewAction(oneReview))
    return oneReview
  }
}
export const updateReview = (payload) => async dispatch =>{
  const {reviewId} = payload

  const response = await fetch(`/api/reviews/${reviewId}`, {
    method:'PUT',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  })

  if(response.ok){
    const updatedReview = await response.json()
    dispatch(updateReviewAction(updatedReview))
    return updatedReview
  }
}

export const deleteReview = reviewId => async dispatch => {

  const response = await fetch(`/api/reviews/${reviewId}`, {
    method:'DELETE',
    headers:{
      'Content-Type': 'application/json',
    },
  })
  if (response.ok){
    const deletedReview = await response.json()
    dispatch(deleteReviewAction(deletedReview))
    return deletedReview
  }
}
/************************REDUCER************************** */
const initialState = {reviews:{}, oneReview:{}}
// userReviews:{}
export const reviewsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CREATE_REVIEW:
      newState = {... state, reviews:{}}

      newState.reviews[action.newReview.id] = action.newReview

      return newState

    // case LOAD_USERS_REVIEWS:{
    //   newState= {...state, userReviews:{}}
    //   action.user.retrieve_user_reviews.forEach(user =>{
    //     // console.log('user in reviews reducer >>>', user)
    //     newState.userReviews[user.user_id.id] = user.user_id
    //   })
    //   return newState
    // }
    case LOAD_REVIEWS:{
      newState = {...state, reviews:{}}
      action.reviews.retrieve_prod_reviews.forEach(review => {
        newState.reviews[review.id] = review
      });
      return newState
    }
    case LOAD_ONE_REVIEW:{
      newState = {...state, oneReview:{}}

      newState.oneReview[action.review.id] = action.review
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
