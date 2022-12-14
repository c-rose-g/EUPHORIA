import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import { productsReducer } from './products';
import { reviewsReducer } from './review';
import { basketReducer } from './shoppingCarts';
import { purchaseHistoryReducer } from './purchaseHistories';
import { lovesReducer } from './loves';
const rootReducer = combineReducers({
  session: sessionReducer,
  products: productsReducer,
  loves:lovesReducer,
  reviews: reviewsReducer,
  basket: basketReducer,
  history: purchaseHistoryReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
