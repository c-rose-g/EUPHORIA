/********************TYPES******************************* */
const CREATE_REVIEW = 'reviews/CREATE'
// not logged in
const LOAD_REVIEWS = 'reviews/LOAD'
// logged in
const UPDATE_REVIEW = 'reviews/UPDATE'
const DELETE_REVIEW = 'reviews/DELETE'


/*******************ACTION CREATORS************************* */
const createReviewAction = (prodId) =>({
  type: CREATE_REVIEW,
  prodId
})

const loadReviewsAction = (reviews) =>({
  type: LOAD_REVIEWS,
  reviews
})

const updateReviewAction = (reviewId) =>({
  type:UPDATE_REVIEW,
  reviewId
})

const deleteReviewAction = (reviewId) =>({
  type:DELETE_REVIEW,
  reviewId
})
/*********************THUNKS******************************* */
export const createReview = (payload) => async dispatch =>{
  const {productId, review_msg} = payload
  const response = await fetch(`/api/`, {
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({review_msg})
  })

  if(response.ok){
    const newReview = await response.json()
    dispatch(createReview(newReview))
    return newReview
  }
}

/************************REDUCER************************** */
