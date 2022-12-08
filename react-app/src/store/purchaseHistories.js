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

			newState.purchaseHistory = action.purchases.retrieve_user_purchase_history;

			return newState;
		default:
			return newState;
	}
};
