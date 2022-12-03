/********************TYPES******************* */
const LOAD_ITEMS = 'history/LOAD';
const ADD_ITEM = 'history/ADD';

/*******************ACTION CREATORS*********** */

const addToPurchaseHistoryAction = (items) => ({
	type: ADD_ITEM,
	items,
});

const loadPurchaseHistoryAction = (purchases) => ({
	type: LOAD_ITEMS,
	purchases,
});
/*********************THUNKS********************** */

export const addToPurchaseHistory = (userId) => async (dispatch) => {
	// console.log('this is the payload in history thunk', userId);
	// console.log('THIS IS THE ROUTE TO BE HIT :>>>>>>', `/api/history/${userId}`);
	const response = await fetch(`/api/history/${userId}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(userId),
	});

	if (response.ok) {
		const item = await response.json();
		dispatch(addToPurchaseHistoryAction(item));
		return item;
	}
};
// id = purchase history id from the backend route, need to refactor to use actual user id
export const loadPurchaseHistory = (userId) => async (dispatch) => {
	const response = await fetch(`/api/history/${userId}`, {
		headers: { 'Content-Type': 'application/json' },
	});
	if (response.ok) {
		const history = await response.json();
		dispatch(loadPurchaseHistoryAction(history));
		return history;
	}
};
/************************REDUCER************************** */

const initialState = { purchaseHistory: {} };
export const purchaseHistoryReducer = (state = initialState, action) => {
	let newState = {};

	switch (action.type) {
		case ADD_ITEM:
			newState = { ...state, purchaseHistory: {} };
			newState.purchaseHistory[action.items.id] = action.items;
			return newState;

		case LOAD_ITEMS:
			newState = { ...state, purchaseHistory: {} };
            // console.log('this is action in purchase history reducer', action.purchases.)
			newState.purchaseHistory = action.purchases.retrieve_user_purchase_history;
            // action.purchases.retrieve_user_purchase_history.forEach(purchase =>{
            //     newState.purchaseHistory = action.purchase
            // })
			return newState;
		default:
			return newState;
	}
};
