import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productPurchasePageReducer } from "./productPurchasePageReducer";

const reducer = combineReducers({
  productsPurchase: productPurchasePageReducer,
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
